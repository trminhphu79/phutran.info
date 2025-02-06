import { OutputData } from '@editorjs/editorjs';
import EditorJS from '@editorjs/editorjs';

export type EditorMode = 'read' | 'edit';

export interface EditorState {
  editor?: EditorJS;
  isReady: boolean;
  autosaveInterval?: number;
}
