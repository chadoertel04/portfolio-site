import { Github } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export default function Projects() {
  return (
    <>
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
          Projects
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Here are some of my recent projects. Each one was carefully crafted
          with attention to detail and user experience.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
        {/* Project 1 */}
        <Card className="overflow-hidden hover:scale-101">
          <div className="relative aspect-video overflow-hidden">
            <img
              src="/images/street_corner.png?height=200&width=400"
              alt="Project 1"
              className="object-cover px-2 w-full h-full transition-transform"
            />
          </div>
          <CardContent className="p-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Pandemic Simulator</h3>
              <p className="text-muted-foreground">
                A pandemic simulator in Unity which makes use of various crowd
                simulation algorithms and a custom-made virus model to simulate
                the spread of a virus in different environments.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge>C#</Badge>
                <Badge>Unity</Badge>
                <Badge>Crowd Simulation</Badge>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://gitlab.com/chad.oertel/individual-project"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  {/* TODO: Move into iFrame */}
                  <a
                    href="https://youtu.be/CJALN6zBhy4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Project 2 */}
        <Card className="overflow-hidden hover:scale-101">
          <div className="relative aspect-video overflow-hidden">
            <img
              src="/placeholder.svg?height=200&width=400"
              alt="Project 2"
              className="object-cover w-full h-full transition-transform"
            />
          </div>
          <CardContent className="p-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Task Management App</h3>
              <p className="text-muted-foreground">
                A productivity application with drag-and-drop interface, task
                categorization, and real-time updates.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge>TypeScript</Badge>
                <Badge>React</Badge>
                <Badge>Firebase</Badge>
                <Badge>Tailwind</Badge>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Project 3 */}
        <Card className="overflow-hidden hover:scale-101">
          <div className="relative aspect-video overflow-hidden">
            <img
              src="/placeholder.svg?height=200&width=400"
              alt="Project 3"
              className="object-cover w-full h-full transition-transform"
            />
          </div>
          <CardContent className="p-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Weather Dashboard</h3>
              <p className="text-muted-foreground">
                A weather application with location search, 7-day forecast, and
                detailed weather metrics.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge>React</Badge>
                <Badge>OpenWeather API</Badge>
                <Badge>Chart.js</Badge>
                <Badge>Geolocation</Badge>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
