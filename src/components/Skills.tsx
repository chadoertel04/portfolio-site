import { Card, CardContent } from "./ui/card";

export default function Skills() {
  return (
    <>
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
          Skills & Expertise
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          I've worked with a variety of technologies and frameworks to create
          responsive and efficient applications.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Frontend */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">Frontend Development</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>React / Vite</span>
              </div>

              <div className="flex justify-between">
                <span>TypeScript</span>
              </div>

              <div className="flex justify-between">
                <span>Tailwind CSS</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Backend */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">Backend Development</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Node.js / Express</span>
              </div>

              <div className="flex justify-between">
                <span>MongoDB / PostgreSQL</span>
              </div>

              <div className="flex justify-between">
                <span>GraphQL</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Other Skills */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">Other Skills</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Git / GitHub</span>
              </div>

              <div className="flex justify-between">
                <span>Docker / CI/CD</span>
              </div>

              <div className="flex justify-between">
                <span>UI/UX Design</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
