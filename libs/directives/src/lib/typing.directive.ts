import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  afterNextRender,
} from '@angular/core';

@Directive({
  selector: '[tmpTypingAnimation]',
  standalone: true,
})
export class TypingAnimationDirective implements OnDestroy {
  @Input() typingSpeed = 50;
  @Input() startDelay = 1000;
  @Input() showCursor = true;
  @Input() cursorColor = 'currentColor';
  @Input() loop = true;
  @Input() loopDelay = 2000; // Delay before starting next loop
  @Input() deleteSpeed = 30; // Speed for deleting text

  private text!: string;
  private cursor: HTMLSpanElement | null = null;
  private isRunning = true;
  private container!: HTMLSpanElement;
  private textElement!: HTMLSpanElement;

  constructor(private el: ElementRef) {
    afterNextRender(() => {
      this.setupAnimation();
    });
  }

  ngOnDestroy() {
    this.isRunning = false;
    this.cursor?.remove();
  }

  private setupAnimation() {
    // Store original text
    this.text = this.el.nativeElement.innerHTML.trim();

    // Create container for text and cursor
    this.container = document.createElement('span');
    this.container.style.display = 'inline-block';
    this.container.style.position = 'relative';
    this.container.style.caretColor = 'transparent'; // Hide the first cursor

    // Create text element
    this.textElement = document.createElement('span');
    this.textElement.style.caretColor = 'transparent'; // Hide the second cursor
    this.container.appendChild(this.textElement);

    // Clear original content and append container
    this.el.nativeElement.innerHTML = '';
    this.el.nativeElement.appendChild(this.container);

    // Start typing animation
    setTimeout(() => this.animationLoop(), this.startDelay);
  }

  private async animationLoop() {
    while (this.isRunning) {
      await this.typeText();
      if (!this.loop) break;
      await this.delay(this.loopDelay);
      await this.deleteText();
      await this.delay(this.startDelay);
    }
  }

  private typeText(): Promise<void> {
    return new Promise((resolve) => {
      const words = this.text.split(' ');
      let wordIndex = 0;
      let charIndex = 0;

      const type = () => {
        if (!this.isRunning) {
          resolve();
          return;
        }

        if (wordIndex < words.length) {
          // Type current word
          if (charIndex < words[wordIndex].length) {
            this.textElement.innerHTML += words[wordIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, this.typingSpeed);
          } else {
            // Word completed
            this.textElement.innerHTML += ' ';
            wordIndex++;
            charIndex = 0;
            // Add slight pause between words
            setTimeout(type, this.typingSpeed * 2);
          }
        } else {
          if (this.textElement) {
            this.textElement.style.caretColor = 'transparent'; // Hide the cursor after typing
          }
          resolve();
        }
      };

      type();
    });
  }

  private deleteText(): Promise<void> {
    return new Promise((resolve) => {
      const deleteChar = () => {
        if (!this.isRunning) {
          resolve();
          return;
        }

        const currentText = this.textElement.innerHTML;
        if (currentText.length > 0) {
          this.textElement.innerHTML = currentText.slice(0, -1);
          setTimeout(deleteChar, this.deleteSpeed);
        } else {
          resolve();
        }
      };

      deleteChar();
    });
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => {
      if (!this.isRunning) {
        resolve();
        return;
      }
      setTimeout(resolve, ms);
    });
  }
}
