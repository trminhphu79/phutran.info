import { Component } from '@angular/core';
import { ExpertiseComponent } from './components/expertise/expertise.component';
import { HeroComponent } from './components/hero/hero.component';
import { JourneyComponent } from './components/journey/journey.component';

@Component({
  selector: 'tmp-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss'],
  standalone: true,
  imports: [HeroComponent, ExpertiseComponent, JourneyComponent],
})
export class MeComponent {}
