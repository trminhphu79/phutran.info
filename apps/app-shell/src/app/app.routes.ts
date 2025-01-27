import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'blog',
    loadChildren: () => import('blog/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    loadChildren: () => import('home/Routes').then((m) => m!.remoteRoutes),
  },
];
