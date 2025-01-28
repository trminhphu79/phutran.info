import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { MeComponent } from './app/me/me.component';
bootstrapApplication(MeComponent, appConfig).catch((err) =>
  console.error(err)
);
