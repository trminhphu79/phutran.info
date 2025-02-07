import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [CommonModule, RouterOutlet],
  selector: 'app-admin-entry',
  template: `
    <router-outlet></router-outlet>
    <button routerLink="/post">Post</button>
  `,
})
export class RemoteEntryComponent {}
