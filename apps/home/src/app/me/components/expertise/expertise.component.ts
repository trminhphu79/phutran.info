import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'tmp-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.scss'],
  standalone: true,
})
export class ExpertiseComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.createObserver();
  }

  private createObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    }, options);

    // Observe all fade-in elements
    const fadeElements = this.elementRef.nativeElement.querySelectorAll('.fade-in-section, .fade-in-element');
    fadeElements.forEach((element: Element) => {
      observer.observe(element);
    });
  }
}
