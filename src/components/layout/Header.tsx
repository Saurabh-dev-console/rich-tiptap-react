import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileEdit } from "lucide-react";

export const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-accent">
            <FileEdit className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold bg-gradient-accent bg-clip-text text-transparent">
            RichTextEditor
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#features"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Features
          </a>
          <a
            href="#demo"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Demo
          </a>
          <a
            href="#docs"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Documentation
          </a>
        </nav>

        <Button className="bg-gradient-accent hover:opacity-90 transition-opacity">
          Get Started
        </Button>
      </div>
    </motion.header>
  );
};
