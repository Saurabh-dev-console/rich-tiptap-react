import { Editor } from "@tiptap/react";
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Code,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Link,
  Image,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCallback } from "react";

interface EditorToolbarProps {
  editor: Editor;
}

export const EditorToolbar = ({ editor }: EditorToolbarProps) => {
  const addLink = useCallback(() => {
    const url = window.prompt("Enter URL:");
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  }, [editor]);

  const addImage = useCallback(() => {
    const url = window.prompt("Enter image URL:");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  return (
    <div className="flex flex-wrap items-center gap-1 p-2 border-b border-[hsl(var(--editor-border))] bg-[hsl(var(--editor-toolbar))]">
      {/* Text Formatting */}
      <Button
        variant="editor"
        size="icon"
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        data-active={editor.isActive("bold")}
        title="Bold"
        className="h-8 w-8"
      >
        <Bold className="h-4 w-4" />
      </Button>
      <Button
        variant="editor"
        size="icon"
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        data-active={editor.isActive("italic")}
        title="Italic"
        className="h-8 w-8"
      >
        <Italic className="h-4 w-4" />
      </Button>
      <Button
        variant="editor"
        size="icon"
        type="button"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        data-active={editor.isActive("underline")}
        title="Underline"
        className="h-8 w-8"
      >
        <Underline className="h-4 w-4" />
      </Button>
      <Button
        variant="editor"
        size="icon"
        type="button"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        data-active={editor.isActive("strike")}
        title="Strikethrough"
        className="h-8 w-8"
      >
        <Strikethrough className="h-4 w-4" />
      </Button>

      <Separator orientation="vertical" className="h-8 mx-1" />

      {/* Headings */}
      <Button
        variant="editor"
        size="icon"
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        data-active={editor.isActive("heading", { level: 1 })}
        title="Heading 1"
        className="h-8 w-8"
      >
        <Heading1 className="h-4 w-4" />
      </Button>
      <Button
        variant="editor"
        size="icon"
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        data-active={editor.isActive("heading", { level: 2 })}
        title="Heading 2"
        className="h-8 w-8"
      >
        <Heading2 className="h-4 w-4" />
      </Button>
      <Button
        variant="editor"
        size="icon"
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        data-active={editor.isActive("heading", { level: 3 })}
        title="Heading 3"
        className="h-8 w-8"
      >
        <Heading3 className="h-4 w-4" />
      </Button>

      <Separator orientation="vertical" className="h-8 mx-1" />

      {/* Lists */}
      <Button
        variant="editor"
        size="icon"
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        data-active={editor.isActive("bulletList")}
        title="Bullet List"
        className="h-8 w-8"
      >
        <List className="h-4 w-4" />
      </Button>
      <Button
        variant="editor"
        size="icon"
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        data-active={editor.isActive("orderedList")}
        title="Ordered List"
        className="h-8 w-8"
      >
        <ListOrdered className="h-4 w-4" />
      </Button>

      <Separator orientation="vertical" className="h-8 mx-1" />

      {/* Blocks */}
      <Button
        variant="editor"
        size="icon"
        type="button"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        data-active={editor.isActive("blockquote")}
        title="Blockquote"
        className="h-8 w-8"
      >
        <Quote className="h-4 w-4" />
      </Button>
      <Button
        variant="editor"
        size="icon"
        type="button"
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        data-active={editor.isActive("codeBlock")}
        title="Code Block"
        className="h-8 w-8"
      >
        <Code className="h-4 w-4" />
      </Button>

      <Separator orientation="vertical" className="h-8 mx-1" />

      {/* Alignment */}
      <Button
        variant="editor"
        size="icon"
        type="button"
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        data-active={editor.isActive({ textAlign: "left" })}
        title="Align Left"
        className="h-8 w-8"
      >
        <AlignLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="editor"
        size="icon"
        type="button"
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        data-active={editor.isActive({ textAlign: "center" })}
        title="Align Center"
        className="h-8 w-8"
      >
        <AlignCenter className="h-4 w-4" />
      </Button>
      <Button
        variant="editor"
        size="icon"
        type="button"
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        data-active={editor.isActive({ textAlign: "right" })}
        title="Align Right"
        className="h-8 w-8"
      >
        <AlignRight className="h-4 w-4" />
      </Button>
      <Button
        variant="editor"
        size="icon"
        type="button"
        onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        data-active={editor.isActive({ textAlign: "justify" })}
        title="Align Justify"
        className="h-8 w-8"
      >
        <AlignJustify className="h-4 w-4" />
      </Button>

      <Separator orientation="vertical" className="h-8 mx-1" />

      {/* Media */}
      <Button
        variant="editor"
        size="icon"
        type="button"
        onClick={addLink}
        data-active={editor.isActive("link")}
        title="Add Link"
        className="h-8 w-8"
      >
        <Link className="h-4 w-4" />
      </Button>
      <Button
        variant="editor"
        size="icon"
        type="button"
        onClick={addImage}
        title="Add Image"
        className="h-8 w-8"
      >
        <Image className="h-4 w-4" />
      </Button>
    </div>
  );
};
