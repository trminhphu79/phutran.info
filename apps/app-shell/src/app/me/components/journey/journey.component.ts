import { CommonModule } from '@angular/common';
import { Component, afterNextRender, afterRender } from '@angular/core';

interface Experience {
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  location: string;
  description: string[]; // Changed to array for multiple lines
  skills: string[];
}

@Component({
  selector: 'tmp-journey',
  template: `
    <section class="timeline">
      <h2 class="timeline-title">Professional Journey</h2>
      <div class="timeline-container">
        <div class="timeline-line"></div>
        <div
          *ngFor="let exp of experiences; let first = first"
          class="experience-item"
          [class.current-position]="first"
        >
          <div class="date-range">{{ exp.startDate }} - {{ exp.endDate }}</div>
          <h3 class="position-title">{{ exp.title }}</h3>
          <div class="company-name">{{ exp.company }}</div>
          <div class="location">{{ exp.location }}</div>
          <div class="description">
            <p *ngFor="let desc of exp.description">{{ desc }}</p>
          </div>

          <!-- Corner borders for current position -->
          <div *ngIf="first" class="corner-borders">
            <div class="corner top-left"></div>
            <div class="corner bottom-left"></div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./journey.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class JourneyComponent {
  experiences: Experience[] = [
    {
      startDate: 'Dec 2024',
      endDate: 'Present',
      title: 'Senior Frontend Developer',
      company: 'CMC Global Company Limited',
      location: 'Ho Chi Minh City, Vietnam · On-site',
      description: [
        'Led the development of large-scale enterprise applications using Angular and TypeScript, implementing complex business logic and optimizing performance.',
        'Architected and maintained scalable frontend solutions, focusing on code quality, reusability, and best practices.',
        'Mentored junior developers and conducted code reviews to ensure high-quality deliverables and knowledge sharing.',
      ],
      skills: [
        'TypeScript',
        'Angular',
        'NestJS',
        'Node.js',
        'Express.js',
        'RxJS',
        'Docker',
        'PostgreSQL',
        'PrimeNG',
        'Nx',
      ],
    },
    {
      startDate: 'Jun 2023',
      endDate: 'Dec 2024',
      title: 'Software Engineer',
      company: 'VNG Corporation',
      location: 'Ho Chi Minh City, Vietnam · On-site',
      description: [
        'Developed and maintained multiple web applications using Angular and React, ensuring responsive design and cross-browser compatibility.',
        'Implemented state management solutions using RxJS and Redux, improving application performance and user experience.',
        'Collaborated with backend teams to design and integrate RESTful APIs, following SOLID principles and clean architecture.',
      ],
      skills: [
        'Angular',
        'React.js',
        'RxJS',
        'Functional Programming',
        'SOLID Design Principles',
        'JavaScript',
        'OOP',
      ],
    },
    {
      startDate: 'Jun 2022',
      endDate: 'May 2023',
      title: 'Frontend Engineer',
      company: 'EcoTruck - Ecosystem for Trucking',
      location: 'Ho Chi Minh City, Vietnam · On-site',
      description: [
        'Built and optimized the logistics management platform using Angular, improving operational efficiency for enterprise clients.',
        'Implemented real-time tracking features and interactive maps using WebSocket and Google Maps API.',
        'Developed reusable UI components and established coding standards for the frontend team.',
      ],
      skills: [
        'HTML',
        'Angular',
        'TypeScript',
        'RxJS',
        'CSS',
        'JavaScript',
        'GitFlow',
        'REST APIs',
      ],
    },
    {
      startDate: 'Jan 2021',
      endDate: 'May 2022',
      title: 'Frontend Developer',
      company: 'Appvity',
      location: 'Vietnam',
      description: [
        'Developed responsive web applications using Angular and TypeScript, focusing on user experience and performance.',
        'Created custom Angular Material components and implemented complex form validations.',
        'Participated in agile development processes and contributed to sprint planning and retrospectives.',
      ],
      skills: [
        'HTML',
        'Angular',
        'TypeScript',
        'RxJS',
        'Angular Material',
        'JavaScript',
        'GitFlow',
        'REST APIs',
      ],
    },
  ];

  constructor() {
    afterNextRender(() => {
      console.log("document.querySelectorAll('.experience-item'): ", document.querySelectorAll('.experience-item'))
      const animationObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate');
              // Once animated, no need to observe anymore
              animationObserver.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.2,
          rootMargin: '0px 0px -10% 0px',
        }
      );

      // Observe timeline items
      document.querySelectorAll('.experience-item').forEach((item, index) => {
        // Add custom delay attribute for staggered animation
        item.setAttribute('style', `--delay: ${index * 0.2}s`);
        animationObserver.observe(item);
      });

      // Observe timeline line
      const timelineLine = document.querySelector('.timeline-line');
      if (timelineLine) {
        animationObserver.observe(timelineLine);
      }
    });
  }
}
