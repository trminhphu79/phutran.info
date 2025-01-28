import { Route } from '@angular/router';
import { AdminAuthGuard } from '@tmp/guards';
export const appRoutes: Route[] = [
  {
    path: 'admin',
    canActivate: [AdminAuthGuard],
    loadChildren: () => import('admin/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'blog',
    loadChildren: () => import('blog/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    loadChildren: () => import('home/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
