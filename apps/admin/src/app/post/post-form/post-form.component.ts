import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '@tmp/services/blog';
import { Blog } from '@tmp/type';
import { EditorComponent } from '@tmp/editor';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, EditorComponent],
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  postForm: FormGroup;
  isEditing = false;
  postId: string | null = null;
  editorData: any = {};

  constructor(
    private fb: FormBuilder,
    private blogService: BlogService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      author: ['', Validators.required],
      thumbnailUrl: ['', [Validators.required, Validators.pattern('https?://.+')]],
    });
  }

  ngOnInit() {
    this.postId = this.route.snapshot.paramMap.get('id');
    if (this.postId) {
      this.isEditing = true;
      this.loadPost(this.postId);
    }
  }

  loadPost(id: string) {
    this.blogService.getBlog(id).subscribe({
      next: (post) => {
        this.postForm.patchValue({
          title: post.data.title,
          author: post.data.author,
          thumbnailUrl: ''
        });
        this.editorData = post.data.content ? JSON.parse(post.data.content) : {};
      },
      error: (error) => {
        console.error('Error loading post:', error);
        // Add error handling here
      },
    });
  }

  onEditorChange(data: any) {
    this.postForm.patchValue({
      content: JSON.stringify(data),
    });
    console.log(this.postForm.value);
  }

  onSubmit() {
    console.log(this.postForm.value);
    if (this.postForm.valid) {
      const post: Blog = {
        ...this.postForm.value,
        content: JSON.stringify(this.postForm.get('content')?.value),
      };

      const request = this.isEditing
        ? this.blogService.updateBlog(this.postId!, post)
        : this.blogService.createBlog(post);

      request.subscribe({
        next: () => {
          this.router.navigate(['..'], { relativeTo: this.route });
          // Add success notification here
        },
        error: (error) => {
          console.error('Error saving post:', error);
          // Add error handling here
        },
      });
    }
  }
}
