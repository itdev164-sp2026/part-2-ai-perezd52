import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectForm } from "@/components/project-form";

export default function NewProjectPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-1">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">Dashboard</p>
        <h1 className="text-3xl font-bold tracking-tight">Create New Project</h1>
        <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
          Add a new project to your dashboard and keep track of progress as it happens.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Project details</CardTitle>
          <CardDescription>Fill in the form below to create a new project.</CardDescription>
        </CardHeader>
        <CardContent>
          <ProjectForm />
        </CardContent>
      </Card>
    </div>
  );
}
