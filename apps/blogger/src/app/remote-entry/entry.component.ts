import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  imports: [CommonModule, RouterModule],
  selector: 'tmp-blog-entry',
  template: ` <router-outlet></router-outlet> `,
})
export class RemoteEntryComponent {}
