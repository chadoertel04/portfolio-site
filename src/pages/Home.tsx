"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "../hooks/useTheme";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className={`px-20 flex flex-col min-h-screen bg-background ${theme}`}>
      <Header />
      <main className="py-12 md:py-24">
        {/* About */}
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_450px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Hi, I'm <span className="text-primary">Chad Oertel</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  A passionate software developer specializing in building
                  exceptional digital experiences.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <a href="#contact">
                    Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#projects">View My Work</a>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative aspect-square w-full max-w-[400px] overflow-hidden rounded-full border-4 border-primary">
                <img
                  src="/images/chad_portrait_2.jpg?height=400&width=400"
                  alt="Developer portrait"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <Projects />
        </section>

        <section
          id="skills"
          className="py-12 md:py-24 lg:py-32 bg-muted rounded-xl p-8"
        >
          <Skills />
        </section>

        <section id="contact" className="py-12 md:py-24 lg:py-32">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}
