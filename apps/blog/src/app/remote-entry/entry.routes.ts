import { Route } from '@angular/router';
import { BlogListComponent } from '../blog-list/blog-list.component';
import { BlogDetailComponent } from '../blog-detail/blog-detail.component';

export const remoteRoutes: Route[] = [
  { path: '', component: BlogListComponent },
  { path: ':slug', component: BlogDetailComponent },
];

