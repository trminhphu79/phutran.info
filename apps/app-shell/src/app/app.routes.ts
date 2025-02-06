import { Route } from '@angular/router';
import { MeComponent } from './me/me.component';

export const appRoutes: Route[] = [
  {
    path: 'blog',
    loadChildren: () => import('blog/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'admin',
    loadChildren: () => import('admin/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    component: MeComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
