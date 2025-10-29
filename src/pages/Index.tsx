import { useState } from "react";
import { RichTextEditor } from "@/components/RichTextEditor";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [content, setContent] = useState("<h1>Welcome to the Rich Text Editor</h1><p>This is a powerful WYSIWYG editor built with TipTap. Try out the formatting tools above!</p>");
  const [readOnly, setReadOnly] = useState(false);

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Rich Text Editor</h1>
          <p className="text-muted-foreground text-lg">
            A feature-rich WYSIWYG editor powered by TipTap
          </p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Editor</CardTitle>
                <CardDescription>
                  Create and format your content with ease
                </CardDescription>
              </div>
              <Button
                variant={readOnly ? "default" : "outline"}
                onClick={() => setReadOnly(!readOnly)}
              >
                {readOnly ? "Edit Mode" : "Read-Only Mode"}
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <RichTextEditor
              initialContent={content}
              onChange={setContent}
              readOnly={readOnly}
              placeholder="Start writing your content here..."
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>HTML Output</CardTitle>
            <CardDescription>
              Live preview of the generated HTML
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{content}</code>
            </pre>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Text Formatting</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Bold, Italic, Underline, Strikethrough</li>
                  <li>• Headings (H1, H2, H3)</li>
                  <li>• Text Alignment (Left, Center, Right, Justify)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Content Blocks</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Bullet & Ordered Lists</li>
                  <li>• Blockquotes</li>
                  <li>• Code Blocks</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Media</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Insert Links</li>
                  <li>• Embed Images</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Modes</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Edit Mode (full toolbar)</li>
                  <li>• Read-Only Mode (content only)</li>
                  <li>• HTML Export</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
