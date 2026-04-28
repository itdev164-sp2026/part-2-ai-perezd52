import { SkillsGrid } from "@/components/skills-grid";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <div className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Developer Profile
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Diego Perez
          </h1>
        </div>
        <p className="max-w-2xl text-base leading-8 text-muted-foreground">
          I’m a web development student building modern, responsive web applications with Next.js, Tailwind CSS, and clean UI patterns. I enjoy learning full-stack workflows and creating interfaces that feel polished across devices.
        </p>
      </section>

      <section className="space-y-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
            <p className="text-sm text-muted-foreground">
              A responsive Tailwind grid showing my core development strengths.
            </p>
          </div>
        </div>

        <SkillsGrid />
      </section>
    </div>
  );
}
