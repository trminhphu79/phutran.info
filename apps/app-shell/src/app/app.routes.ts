import { Route } from '@angular/router';
import { MeComponent } from './me/me.component';

export const appRoutes: Route[] = [
  {
    path: 'admin',
    loadChildren: () => import('admin/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'blog',
    loadChildren: () => import('blogger/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    component: MeComponent,
  },
];
