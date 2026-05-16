"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast, Toaster } from "sonner";
import { createProject } from "@/app/actions";
import { projectSchema, type Project } from "@/lib/schemas";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ProjectForm() {
  const form = useForm<Project>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: "",
      description: "",
      status: "active",
    },
  });

  const onSubmit = async (values: Project) => {
    const response = await createProject(values);

    if (response.success) {
      toast.success("Project created successfully.");
      form.reset();
      return;
    }

    toast.error(response.error ?? "Unable to create project.");
  };

  return (
    <>
      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        <Field>
          <FieldLabel htmlFor="title">Title</FieldLabel>
          <Input id="title" placeholder="Enter project title" {...form.register("title")} />
          <FieldError errors={form.formState.errors.title ? [form.formState.errors.title] : undefined} />
        </Field>

        <Field>
          <FieldLabel htmlFor="description">Description</FieldLabel>
          <Textarea
            id="description"
            placeholder="Enter project description"
            rows={5}
            {...form.register("description")}
          />
          <FieldError
            errors={form.formState.errors.description ? [form.formState.errors.description] : undefined}
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="status">Status</FieldLabel>
          <Controller
            control={form.control}
            name="status"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger aria-label="Project status">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          <FieldError errors={form.formState.errors.status ? [form.formState.errors.status] : undefined} />
        </Field>

        <Button type="submit">Create Project</Button>
      </form>
      <Toaster />
    </>
  );
}
