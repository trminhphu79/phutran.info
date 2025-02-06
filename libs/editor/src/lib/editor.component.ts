import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import EditorJS, { OutputData } from '@editorjs/editorjs';
import { EditorMode, EditorState } from './editor.types';
import { AUTOSAVE_INTERVAL } from './editor.constants';
import { createEditorConfig } from './editor.utils';

@Component({
  selector: 'tmp-editor',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="editor-container">
      <div #editorjs class="editor-area"></div>
    </div>
  `,
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit, OnDestroy, OnChanges {
  @ViewChild('editorjs', { static: true }) editorElement!: ElementRef;
  @Input() data?: OutputData;
  @Input() mode: EditorMode = 'read';
  @Output() dataChange = new EventEmitter<OutputData>();

  private state: EditorState = {
    isReady: false
  };

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes['data'] &&
      !changes['data'].firstChange &&
      this.state.editor &&
      this.state.isReady
    ) {
      this.updateEditorData(changes['data'].currentValue);
    }
    if (
      changes['mode'] &&
      !changes['mode'].firstChange &&
      this.state.editor &&
      this.state.isReady
    ) {
      this.updateEditorMode(changes['mode'].currentValue);
    }
  }

  ngOnInit() {
    this.initializeEditor();
    this.setupAutosave();
  }

  ngOnDestroy() {
    this.clearAutosave();
    if (this.state.editor) {
      this.state.editor.destroy();
    }
  }

  private async initializeEditor() {
    const config = createEditorConfig(
      this.editorElement.nativeElement,
      this.mode,
      this.data,
      () => this.onChange()
    );

    this.state.editor = new EditorJS(config);
    await this.state.editor.isReady;
    this.state.isReady = true;
  }

  private async updateEditorData(data: OutputData) {
    if (this.state.editor && this.state.isReady) {
      await this.state.editor.render(data);
    }
  }

  private async updateEditorMode(mode: EditorMode) {
    if (this.state.editor && this.state.isReady) {
      await this.state.editor.destroy();
      await this.initializeEditor();
    }
  }

  private async onChange() {
    if (this.state.editor) {
      try {
        const savedData = await this.state.editor.save();
        this.dataChange.emit(savedData);
      } catch (error) {
        console.error('Failed to save editor data:', error);
      }
    }
  }

  private setupAutosave() {
    if (this.mode === 'edit') {
      this.state.autosaveInterval = window.setInterval(
        async () => {
          await this.onChange();
        },
        AUTOSAVE_INTERVAL
      );
    }
  }

  private clearAutosave() {
    if (this.state.autosaveInterval) {
      clearInterval(this.state.autosaveInterval);
    }
  }

  // Public methods for external control
  async save(): Promise<OutputData> {
    if (!this.state.editor) {
      throw new Error('Editor is not initialized');
    }
    return await this.state.editor.save();
  }

  async clear() {
    if (!this.state.editor) {
      throw new Error('Editor is not initialized');
    }
    await this.state.editor.clear();
  }
}
