import {
  Code2,
  LayoutGrid,
  Server,
  Globe2,
  Smartphone,
  GitBranch,
} from "lucide-react";

const skills = [
  {
    name: "Front-end Development",
    description: "React, Next.js, and component-driven UIs.",
    icon: Code2,
  },
  {
    name: "Responsive Design",
    description: "Mobile-first layouts with Tailwind CSS.",
    icon: LayoutGrid,
  },
  {
    name: "Modern Web Architecture",
    description: "App Router, server components, and clean data flow.",
    icon: Server,
  },
  {
    name: "HTML & CSS",
    description: "Semantic markup and accessible styling.",
    icon: Globe2,
  },
  {
    name: "Cross-Device UI",
    description: "Interfaces that adapt smoothly to different screens.",
    icon: Smartphone,
  },
  {
    name: "Version Control",
    description: "Git workflows for collaboration and code management.",
    icon: GitBranch,
  },
];

export function SkillsGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map(({ name, description, icon: Icon }) => (
        <div
          key={name}
          className="rounded-3xl border border-border bg-card p-6 shadow-sm transition hover:border-primary/50 hover:shadow-lg"
        >
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-muted">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold tracking-tight">{name}</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
        </div>
      ))}
    </div>
  );
}
