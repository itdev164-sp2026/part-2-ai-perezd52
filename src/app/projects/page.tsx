import Link from "next/link";
import { supabase } from "@/lib/supabase";
import {
  Button,
} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Project = {
  id: string;
  title: string;
  description: string;
  status: string;
};

const statusStyles: Record<string, string> = {
  active: "bg-emerald-100 text-emerald-700",
  completed: "bg-sky-100 text-sky-700",
  archived: "bg-slate-100 text-slate-700",
};

function getStatusClass(status: string) {
  return statusStyles[status.toLowerCase()] ?? "bg-muted text-muted-foreground";
}

export default async function ProjectsPage() {
  const { data: projects, error } = await supabase
    .from<Project>("projects")
    .select("id,title,description,status")
    .order("title", { ascending: true });

  if (error) {
    return (
      <div className="space-y-4 rounded-3xl border border-destructive/10 bg-destructive/5 p-6">
        <h1 className="text-2xl font-semibold">Projects</h1>
        <p className="text-sm text-destructive-foreground">
          Unable to load projects at this time. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <header className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Dashboard
            </p>
            <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          </div>
          <Button asChild>
            <Link href="/projects/new">New Project</Link>
          </Button>
        </div>
        <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
          A professional overview of your project portfolio, with status badges and concise summaries.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects?.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <span
                className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusClass(
                  project.status
                )}`}
              >
                {project.status}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
