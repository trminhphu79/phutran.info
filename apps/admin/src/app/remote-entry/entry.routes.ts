import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  { path: '', component: RemoteEntryComponent },
  {
    path: 'post',
    loadChildren: () => import('../post/post.routes').then((m) => m.postRoutes),
  },
];
