import { EditorComponent, OutputData } from '@tmp/editor';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '@tmp/services/blog';

@Component({
  selector: 'tmp-blog-detail',
  standalone: true,
  imports: [CommonModule, EditorComponent],
  template: `
    <div style="width: 100%; height: 100%;margin-top: 80px">
      <tmp-editor *ngIf="blogData" [data]="blogData"></tmp-editor>
    </div>
  `,
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent implements OnInit {
  blogData?: OutputData;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const slug = params['slug'];
      this.fetchBlogContent(slug);
    });
  }

  private fetchBlogContent(id: string) {
    this.blogService.getBlog(id).subscribe({
      next: (data) => {
        console.log('getBlog data: ', data.data.content);
        this.blogData = JSON.parse(data.data.content);
      },
      error: (error) => {
        console.error('Error fetching blog content:', error);
        // Handle error appropriately
      },
    });
  }

  onEditorChange(data: OutputData) {
    console.log('Editor content updated:', data);
    // Handle the updated content here
  }
}
