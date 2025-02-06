import { EditorComponent, OutputData } from '@tmp/editor';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tmp-blog-detail',
  standalone: true,
  imports: [CommonModule, EditorComponent],
  template: `
    <div style="width: 100%; height: 100%;margin-top: 80px">
      <tmp-editor [data]="initialData"></tmp-editor>
    </div>
  `,
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent {
  initialData: OutputData = {
    time: 1738854849365,
    blocks: [
      {
        id: 'headerImage',
        type: 'image',
        data: {
          url: 'https://angular.io/assets/images/logos/angular/angular.png',
          caption: 'Angular Framework Logo',
          withBorder: true,
          withBackground: false,
          stretched: false,
        },
      },
      {
        id: '_q6QZmL_wT',
        type: 'header',
        data: {
          text: 'Understanding Angular Directives',
          level: 1,
        },
      },
      {
        id: 'wj-oeL5FK8',
        type: 'paragraph',
        data: {
          text: 'Angular directives are markers on DOM elements that tell Angular to do something with that element. There are three types of directives in Angular: Components, Structural directives, and Attribute directives.',
        },
      },
      {
        id: 'fTlwacD7JE',
        type: 'header',
        data: {
          text: '1. Custom Attribute Directive Example',
          level: 2,
        },
      },
      {
        id: 'TeC-brbq3G',
        type: 'paragraph',
        data: {
          text: "Let's create a simple highlight directive that changes the background color of an element when hovering over it.",
        },
      },
      {
        id: 'p7yAVWeIfk',
        type: 'code',
        data: {
          code: `import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#f0f0f0');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}`,
        },
      },
      {
        id: 'xtT1u_DVgd',
        type: 'header',
        data: {
          text: '2. Structural Directive Example',
          level: 2,
        },
      },
      {
        id: 'GGoLMETY-t',
        type: 'paragraph',
        data: {
          text: 'Here is an example of a custom structural directive that implements an unless logic (opposite of *ngIf):',
        },
      },
      {
        id: 'SmlyDFKFgi',
        type: 'code',
        data: {
          code: `import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set appUnless(condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}`,
        },
      },
      {
        id: 'QAc2hIdRUc',
        type: 'header',
        data: {
          text: 'Using the Directives',
          level: 2,
        },
      },
      {
        id: 'XgRyv7UejZ',
        type: 'code',
        data: {
          code: `<div appHighlight>
  This div will highlight on hover
</div>

<div *appUnless="condition">
  This content will show when condition is false
</div>`,
        },
      },
      {
        id: 'qkjz8QgfVm',
        type: 'paragraph',
        data: {
          text: 'Remember to declare these directives in your module:',
        },
      },
      {
        id: 'gpaar5_8LL',
        type: 'code',
        data: {
          code: `@NgModule({
  declarations: [
    HighlightDirective,
    UnlessDirective
  ],
  // ... other module properties
})`,
        },
      },
      {
        id: 'RLgWwfmVaL',
        type: 'paragraph',
        data: {
          text: 'Directives are powerful features in Angular that allow you to extend HTML with custom behavior. They are perfect for reusing logic across components and creating more maintainable applications.',
        },
      },
    ],
    version: '2.22.2',
  };

  onEditorChange(data: OutputData) {
    console.log('Editor content updated:', data);
    // Handle the updated content here
  }
}
