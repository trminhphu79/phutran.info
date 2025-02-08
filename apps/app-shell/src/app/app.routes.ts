import { Route } from '@angular/router';
import { MeComponent } from './me/me.component';

export const appRoutes: Route[] = [
  {
    path: 'blog',
    loadChildren: () => import('apps/blogger/src/app/remote-entry/entry.routes').then((m) => m!.remoteRoutes),
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
