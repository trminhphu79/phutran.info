import {
  Directive,
  ElementRef,
  OnInit,
  OnDestroy,
  Renderer2,
} from '@angular/core';

interface Snowflake {
  element: HTMLElement;
  speed: number;
  radius: number;
  wobble: number;
  wobbleSpeed: number;
}

@Directive({
  selector: '[tmpSnow]',
  standalone: true,
})
export class SnowDirective implements OnInit, OnDestroy {
  private snowflakes: Snowflake[] = [];
  private animationFrameId: number | null = null;
  private isDestroyed = false;
  private time = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // Make sure the container can handle absolute positioning
    this.renderer.setStyle(this.el.nativeElement, 'position', 'relative');
    this.renderer.setStyle(this.el.nativeElement, 'overflow', 'hidden');
  }

  ngOnInit() {
    this.createSnowflakes();
    this.animateSnowflakes();
  }

  ngOnDestroy() {
    this.isDestroyed = true;
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    this.snowflakes.forEach(flake => flake.element.remove());
  }

  private createSnowflakes() {
    const numberOfFlakes = window.innerWidth < 768 ? 75 : 150; // More flakes on larger screens
    const container = this.el.nativeElement;

    for (let i = 0; i < numberOfFlakes; i++) {
      const flake = this.renderer.createElement('div');
      
      // Apply base styles
      this.renderer.addClass(flake, 'snowflake');
      
      // Random properties for natural movement
      const speed = 0.2 + Math.random() * 0.8; // Variable speed
      const radius = Math.random() * 4; // Random movement radius
      const wobble = Math.random() * 360; // Random wobble offset
      const wobbleSpeed = 0.02 + Math.random() * 0.05; // Random wobble speed
      
      // Set random initial position
      const startPositionLeft = Math.random() * 100;
      this.renderer.setStyle(flake, 'left', `${startPositionLeft}%`);
      this.renderer.setStyle(flake, 'top', `-${Math.random() * 100}%`);

      // Random size between 2px and 8px with different shapes
      const size = 2 + Math.random() * 6;
      this.renderer.setStyle(flake, 'width', `${size}px`);
      this.renderer.setStyle(flake, 'height', `${size}px`);

      // Random opacity and blur for depth effect
      const opacity = 0.4 + Math.random() * 0.6;
      this.renderer.setStyle(flake, 'opacity', opacity);
      this.renderer.setStyle(flake, 'filter', `blur(${Math.random()}px)`);

      // Add glowing effect for some snowflakes
      if (Math.random() > 0.7) {
        this.renderer.addClass(flake, 'snowflake-glow');
        this.renderer.setStyle(flake, 'box-shadow', `
          0 0 ${2 + Math.random() * 4}px var(--snow-color),
          0 0 ${4 + Math.random() * 8}px var(--snow-shadow)
        `);
      }

      // Random rotation for some flakes
      if (Math.random() > 0.5) {
        this.renderer.setStyle(flake, 'transform', `rotate(${Math.random() * 360}deg)`);
      }

      // Add to container and store reference with properties
      this.renderer.appendChild(container, flake);
      this.snowflakes.push({
        element: flake,
        speed,
        radius,
        wobble,
        wobbleSpeed
      });
    }
  }

  private animateSnowflakes() {
    if (this.isDestroyed) return;

    this.time += 0.016; // Approximately 60fps

    this.snowflakes.forEach(flake => {
      const rect = flake.element.getBoundingClientRect();
      const containerRect = this.el.nativeElement.getBoundingClientRect();

      // Get current position
      const currentTop = parseFloat(flake.element.style.top);
      const currentLeft = parseFloat(flake.element.style.left);

      // Calculate wobble movement
      const wobbleOffset = Math.sin(this.time * flake.wobbleSpeed + flake.wobble) * flake.radius;

      // Update position with natural movement
      let newTop = currentTop + flake.speed;
      let newLeft = currentLeft + wobbleOffset * 0.1;

      // Reset if out of bounds
      if (rect.top > containerRect.height) {
        newTop = -10;
        newLeft = Math.random() * 100;
      }

      // Keep within horizontal bounds
      newLeft = Math.max(0, Math.min(100, newLeft));

      // Apply new position with smooth transform
      this.renderer.setStyle(flake.element, 'transform', `
        translate(${wobbleOffset}px, 0) 
        rotate(${wobbleOffset * 10}deg)
      `);
      this.renderer.setStyle(flake.element, 'top', `${newTop}%`);
      this.renderer.setStyle(flake.element, 'left', `${newLeft}%`);
    });

    this.animationFrameId = requestAnimationFrame(() => this.animateSnowflakes());
  }
}
