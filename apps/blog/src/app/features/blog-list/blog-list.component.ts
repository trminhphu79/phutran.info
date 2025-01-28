import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  content: string;
  createdAt: Date;
  imageLoaded?: boolean;
}
@Component({
  selector: 'app-blog-list',
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
            [routerLink]="['/blog', post.slug]"
          >
            <div class="thumbnail-container" [class.loading]="!post.imageLoaded">
              <img
                [src]="post.thumbnail"
                [alt]="post.title"
                class="blog-thumbnail"
                [class.loaded]="post.imageLoaded"
                (load)="onImageLoad(post)"
                loading="lazy"
              />
            </div>
            <div class="blog-content">
              <ng-container *ngIf="post.imageLoaded; else skeletonContent">
                <h2>{{ post.title }}</h2>
                <p class="description">{{ post.description }}</p>
                <span class="date">{{
                  post.createdAt | date : 'mediumDate'
                }}</span>
              </ng-container>
              <ng-template #skeletonContent>
                <div class="skeleton-text title"></div>
                <div class="skeleton-text description"></div>
                <div class="skeleton-text description"></div>
              </ng-template>
            </div>
          </article>
        </ng-container>
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
  posts: BlogPost[] = []; // Will be populated from a service
  filteredPosts: BlogPost[] = [];
  searchTerm!: string;

  ngOnInit() {
    // Temporary mock data
    this.posts = [
      {
        id: '1',
        slug: 'getting-started-with-angular',
        title: 'Getting Started with Angular',
        description:
          'Learn the basics of Angular and how to create your first application. This guide covers everything you need to know.',
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
        content: '',
        createdAt: new Date(),
      },
      {
        id: '2',
        slug: 'angular-change-detection',
        title: 'Angular Change Detection Explained',
        description:
          'Learn the basics of Angular and how to create your first application. This guide covers everything you need to know.',
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
        content: '',
        createdAt: new Date(),
      },
      // angular router
      {
        id: '3',
        slug: 'angular-router',
        title: 'Angular Router Explained',
        description: 'Learn the basics of Angular Router and how to use it.',
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
        content: '',
        createdAt: new Date(),
      },
      //javascript closure
      {
        id: '4',
        slug: 'javascript-closure',
        title: 'JavaScript Closure Explained',
        description:
          'Learn the basics of JavaScript Closure and how to use it.',
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
        content: '',
        createdAt: new Date(),
      },

      //javascript event loop
      {
        id: '5',
        slug: 'javascript-event-loop',
        title: 'JavaScript Event Loop Explained',
        description: 'Learn the basics of JavaScript Event Loop and how to use it.',
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
        content: '',
        createdAt: new Date(),
      },

      //javascript async/await
      {
        id: '6',
        slug: 'javascript-async-await',
        title: 'JavaScript Async/Await Explained',
        description: 'Learn the basics of JavaScript Async/Await and how to use it.',
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
        content: '',
        createdAt: new Date(),
      },
      // Add more mock posts...
    ];
    this.filteredPosts = this.posts;
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
        post.description.toLowerCase().includes(searchTermLower)
    );
  }

  onImageLoad(post: BlogPost) {
    post.imageLoaded = true;
  }
}
