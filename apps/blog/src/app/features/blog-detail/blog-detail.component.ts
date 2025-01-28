import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  content: string;
  createdAt: Date;
}

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="blog-detail-container" *ngIf="post; else notFound">
      <header class="blog-header">
        <h1>{{ post.title }}</h1>
        <span class="date">{{ post.createdAt | date : 'longDate' }}</span>
      </header>

      <div class="image-container" [class.loading]="!imageLoaded">
        <img 
          [src]="post.thumbnail" 
          [alt]="post.title" 
          class="blog-image"
          [class.loaded]="imageLoaded"
          (load)="onImageLoad()"
        />
      </div>

      <div class="blog-content">
        <ng-container *ngIf="imageLoaded; else skeletonContent">
          {{ post.content }}
        </ng-container>
        <ng-template #skeletonContent>
          <div class="skeleton-content">
            <div class="skeleton-text" *ngFor="let i of [1,2,3,4,5]"></div>
          </div>
        </ng-template>
      </div>
    </div>

    <ng-template #notFound>
      <div class="not-found">
        <h2>Blog Post Not Found</h2>
        <p>
          The blog post you're looking for doesn't exist or has been removed.
        </p>
        <button (click)="goBack()">Back to Blog List</button>
      </div>
    </ng-template>
  `,
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent implements OnInit {
  post: BlogPost | null = null;
  imageLoaded = false;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    // Here you would normally fetch the post from a service
    // For now, we'll just show the not found state
    this.post = null;
  }

  goBack() {
    this.router.navigate(['/']);
  }

  onImageLoad() {
    this.imageLoaded = true;
  }
}
