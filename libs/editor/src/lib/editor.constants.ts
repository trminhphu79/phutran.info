import Header from '@editorjs/header';
import List from '@editorjs/list';
import Code from '@editorjs/code';
import Quote from '@editorjs/quote';
import InlineCode from '@editorjs/inline-code';
import Table from '@editorjs/table';
import Image from '@editorjs/image';

export const AUTOSAVE_INTERVAL = 3000;

export const EDITOR_TOOLS = {
  header: {
    class: Header as any,
    config: {
      levels: [1, 2, 3, 4, 5, 6],
      defaultLevel: 2,
    },
  },
  image: {
    class: Image,
    config: {
      endpoints: {
        byFile: 'http://localhost:4209',
      },
      captionPlaceholder: 'Image caption',
      withBorder: true,
      withBackground: true,
      stretched: true,
    },
  },
  list: List as any,
  code: {
    class: Code,
    config: {
      placeholder: 'Enter code here...',
      actions: [
        {
          name: 'copy',
          icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 9h-9a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
          onClick: async (block: any) => {
            const content = block.holder.querySelector('.ce-code__textarea').value;
            await navigator.clipboard.writeText(content);
          }
        }
      ]
    },
  },
  quote: {
    class: Quote,
    inlineToolbar: true,
    config: {
      quotePlaceholder: 'Enter a quote',
      captionPlaceholder: "Quote's author",
    },
  },
  inlineCode: {
    class: InlineCode,
    shortcut: 'CMD+SHIFT+C',
  },
  table: {
    class: Table as any,
    inlineToolbar: true,
    config: {
      rows: 2,
      cols: 3,
    },
  },
}; 