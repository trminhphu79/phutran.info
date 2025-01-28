import { Component } from '@angular/core';
import { TypingAnimationDirective } from '@tmp/directives';

@Component({
  selector: 'tmp-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  standalone: true,
  imports: [TypingAnimationDirective],
})
export class HeroComponent {}
