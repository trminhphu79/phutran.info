import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogService } from '@tmp/services/blog';
import { Blog } from '@tmp/type';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container mx-auto p-4">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold">Posts</h1>
        <button
          routerLink="create"
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create Post
        </button>
      </div>

      <div class="grid gap-4">
        <div
          *ngFor="let post of posts"
          class="border p-4 rounded shadow-sm hover:shadow-md transition-shadow"
        >
          <h2 class="text-xl font-semibold">{{ post.title }}</h2>
          <p class="text-gray-600">By {{ post.author }}</p>
          <p class="text-gray-500 mt-2 line-clamp-2">{{ post.content }}</p>
          <div class="mt-2 flex gap-2">
            <button
              [routerLink]="['edit', post.id]"
              class="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
            >
              Edit
            </button>
            <button
              (click)="deletePost(post.id!)"
              class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class PostListComponent implements OnInit {
  posts: Blog[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.blogService.getBlogs().subscribe({
      next: (blogs) => {
        this.posts = blogs.data;
      },
      error: (error) => {
        console.error('Error loading posts:', error);
        // Add error handling here (e.g., toast notification)
      },
    });
  }

  deletePost(id: string) {
    if (confirm('Are you sure you want to delete this post?')) {
      this.blogService.deleteBlog(id).subscribe({
        next: () => {
          this.posts = this.posts.filter((post) => post.id !== id);
          // Add success notification here
        },
        error: (error) => {
          console.error('Error deleting post:', error);
          // Add error handling here
        },
      });
    }
  }
}
