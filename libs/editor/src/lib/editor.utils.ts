import { EditorConfig, OutputData } from '@editorjs/editorjs';
import { EDITOR_TOOLS } from './editor.constants';
import { EditorMode } from './editor.types';

export function createEditorConfig(
  holder: HTMLElement,
  mode: EditorMode,
  data: OutputData | undefined,
  onChange: () => void
): EditorConfig {
  return {
    holder,
    readOnly: mode === 'read',
    tools: EDITOR_TOOLS,
    data: data || {
      blocks: [],
    },
    onChange,
    placeholder: "Let's write something...",
  };
} 