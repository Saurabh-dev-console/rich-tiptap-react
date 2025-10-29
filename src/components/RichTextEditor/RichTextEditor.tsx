import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import { useEffect } from "react";
import { EditorToolbar } from "./EditorToolbar";

interface RichTextEditorProps {
  initialContent?: string;
  onChange?: (html: string) => void;
  readOnly?: boolean;
  placeholder?: string;
}

export const RichTextEditor = ({
  initialContent = "",
  onChange,
  readOnly = false,
  placeholder = "Start typing...",
}: RichTextEditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "text-primary underline cursor-pointer",
        },
      }),
      Image.configure({
        HTMLAttributes: {
          class: "max-w-full h-auto rounded-lg",
        },
      }),
    ],
    content: initialContent,
    editable: !readOnly,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none focus:outline-none min-h-[200px] p-4",
      },
    },
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && initialContent !== editor.getHTML()) {
      editor.commands.setContent(initialContent);
    }
  }, [initialContent, editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className="border border-[hsl(var(--editor-border))] rounded-lg overflow-hidden bg-[hsl(var(--editor-background))] shadow-sm">
      {!readOnly && <EditorToolbar editor={editor} />}
      <EditorContent
        editor={editor}
        className="tiptap-editor"
        placeholder={placeholder}
      />
    </div>
  );
};
