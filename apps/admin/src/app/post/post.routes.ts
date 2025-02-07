import { Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostFormComponent } from './post-form/post-form.component';
import { provideHttpClient } from '@angular/common/http';

export const postRoutes: Routes = [
  {
    path: '',
    providers: [provideHttpClient()],
    children: [
      { path: '', component: PostListComponent },
      { path: 'create', component: PostFormComponent },
      { path: 'edit/:id', component: PostFormComponent },
    ],
  },
];
