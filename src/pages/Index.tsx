import { useState } from "react";
import { motion } from "framer-motion";
import { RichTextEditor } from "@/components/RichTextEditor";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Bold,
  Italic,
  List,
  Image,
  Link,
  Code,
  Zap,
  Shield,
  Sparkles,
} from "lucide-react";

const Index = () => {
  const [content, setContent] = useState(
    "<h1>Welcome to the Rich Text Editor</h1><p>This is a powerful WYSIWYG editor built with TipTap. Try out the formatting tools above!</p>"
  );
  const [readOnly, setReadOnly] = useState(false);

  const features = [
    {
      icon: Bold,
      title: "Text Formatting",
      description: "Bold, italic, underline, and more styling options",
    },
    {
      icon: List,
      title: "Lists & Blocks",
      description: "Bullet lists, ordered lists, and blockquotes",
    },
    {
      icon: Image,
      title: "Media Support",
      description: "Insert images and links seamlessly",
    },
    {
      icon: Code,
      title: "Code Blocks",
      description: "Syntax-highlighted code blocks for developers",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for performance and speed",
    },
    {
      icon: Shield,
      title: "Read-Only Mode",
      description: "Switch to read-only for content display",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-hero">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 max-w-3xl mx-auto"
          >
            <Badge className="bg-gradient-accent text-primary-foreground border-0">
              <Sparkles className="h-3 w-3 mr-1" />
              Powered by TipTap
            </Badge>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Create Beautiful Content with{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Ease
              </span>
            </h1>

            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              A feature-rich WYSIWYG editor that makes content creation effortless.
              Built for developers and content creators who demand the best.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-gradient-accent hover:opacity-90 transition-opacity">
                Get Started Free
              </Button>
              <Button size="lg" variant="outline">
                View Documentation
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section id="features" className="container py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-4 mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Powerful Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need for professional content creation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-border/40 bg-gradient-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-accent mb-4">
                      <feature.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Editor Demo Section */}
        <section id="demo" className="container py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-border/40 bg-gradient-card shadow-2xl">
              <CardHeader>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl">Interactive Demo</CardTitle>
                    <CardDescription className="text-base">
                      Try the editor yourself
                    </CardDescription>
                  </div>
                  <Button
                    variant={readOnly ? "default" : "outline"}
                    onClick={() => setReadOnly(!readOnly)}
                    className={
                      readOnly
                        ? "bg-gradient-accent hover:opacity-90"
                        : ""
                    }
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

            <Card className="mt-6 border-border/40 bg-gradient-card">
              <CardHeader>
                <CardTitle>HTML Output</CardTitle>
                <CardDescription>
                  Live preview of the generated HTML
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-background/50 p-4 rounded-lg overflow-x-auto text-sm border border-border/40">
                  <code>{content}</code>
                </pre>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
