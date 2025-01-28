import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Experience {
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  location: string;
  description?: string;
  skills: string[];
}

@Component({
  selector: 'tmp-journey',
  templateUrl: './journey.component.html',
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
      description:
        'EcoTruck offers an effective solution for enterprise logistics operations. With breakthrough technology solutions and professional staff, EcoTruck elevates the service quality of the transportation industry.',
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
}
