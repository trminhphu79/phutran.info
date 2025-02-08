import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Blog } from '@tmp/type';
import { BlogService } from '@tmp/services/blog';

@Component({
  selector: 'tmp-blog-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="blog-container">
      <!-- Search Section -->
      <div class="search-section">
        <input
          type="text"
          [(ngModel)]="searchTerm"
          (ngModelChange)="onSearch()"
          placeholder="Search blogs..."
          class="search-input"
        />
      </div>

      <!-- Blog List -->
      <div class="blog-grid">
        <ng-container *ngIf="filteredPosts.length > 0; else emptyState">
          <article
            *ngFor="let post of filteredPosts"
            class="blog-card"
            [routerLink]="['/blog', post.id]"
          >
            <div class="blog-content">
              <h2>{{ post.title }}</h2>
              <p class="description">{{ post.content | slice : 0 : 150 }}...</p>
              <div class="meta-info">
                <span class="date">{{
                  post.createdAt | date : 'mediumDate'
                }}</span>
                <span class="author" *ngIf="post.author"
                  >by {{ post.author }}</span
                >
              </div>
              <div class="tags">
                <span class="tag" *ngFor="let tag of post.tag">{{ tag }}</span>
              </div>
            </div>
          </article>
        </ng-container>
      </div>

      <!-- Load More -->
      <div class="load-more" *ngIf="hasMorePosts">
        <button (click)="loadMore()" [disabled]="loading">
          {{ loading ? 'Loading...' : 'Load More' }}
        </button>
      </div>

      <!-- Empty State -->
      <ng-template #emptyState>
        <div class="empty-state">
          <img src="assets/empty-state.svg" alt="No posts found" />
          <h3>No posts found</h3>
          <p>Try adjusting your search or check back later for new content.</p>
        </div>
      </ng-template>
    </div>
  `,
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  posts: Blog[] = [];
  filteredPosts: Blog[] = [];
  searchTerm = '';
  loading = false;
  hasMorePosts = true;

  // Pagination params
  private offset = 0;
  private limit = 10;

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.loadPosts();
  }

  private loadPosts() {
    if (this.loading) return;

    this.loading = true;
    this.blogService.getBlogs().subscribe({
      next: (response) => {
        if (response.data) {
          const newPosts = response.data;
          this.posts =
            this.offset === 0 ? newPosts : [...this.posts, ...newPosts];
          this.filteredPosts = this.posts;
          this.hasMorePosts = newPosts.length === this.limit;
          this.offset += this.limit;
        }
      },
      error: (error) => {
        console.error('Error loading blogs:', error);
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  onSearch() {
    if (!this.searchTerm.trim()) {
      this.filteredPosts = this.posts;
      return;
    }

    const searchTermLower = this.searchTerm.toLowerCase();
    this.filteredPosts = this.posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTermLower) ||
        post.content.toLowerCase().includes(searchTermLower) ||
        post.tag.some((tag) => tag.toLowerCase().includes(searchTermLower))
    );
  }

  loadMore() {
    this.loadPosts();
  }
}
