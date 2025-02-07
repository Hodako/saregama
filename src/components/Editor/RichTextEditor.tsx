import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import { useEffect } from 'react';

const RichTextEditor = ({ content, onChange }: { content: string; onChange: (html: string) => void }) => {
  const editor = useEditor({
    extensions: [StarterKit, Image],
    content: content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && !editor.isDestroyed) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  const addImage = () => {
    const url = prompt('Enter image URL');
    if (url && editor) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  return (
    <div className="border rounded-lg p-4 min-h-[400px]">
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => editor?.chain().focus().toggleBold().run()}
          className="px-2 py-1 rounded hover:bg-gray-100"
        >
          B
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          className="px-2 py-1 rounded hover:bg-gray-100"
        >
          I
        </button>
        <button onClick={addImage} className="px-2 py-1 rounded hover:bg-gray-100">
          Insert Image
        </button>
      </div>
      <EditorContent editor={editor} className="prose max-w-none" />
    </div>
  );
};

export default RichTextEditor;
