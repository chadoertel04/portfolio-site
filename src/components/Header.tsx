import { Github, Linkedin, Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "../hooks/useTheme";


export default function Header() {
    const { toggleTheme } = useTheme();

    return (
        <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex md:flex-row h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">Dev.Portfolio</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#about"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={toggleTheme}>
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
          </div>
        </div>
      </header>
    );
}
