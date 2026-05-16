"use server";

import { supabase } from "@/lib/supabase";
import { projectSchema, type Project } from "@/lib/schemas";

type CreateProjectResult = {
  success: boolean;
  error?: string;
};

export async function createProject(formData: Project): Promise<CreateProjectResult> {
  const parsed = projectSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.issues.map((issue) => issue.message).join(" "),
    };
  }

  const { error } = await supabase.from("projects").insert(parsed.data);

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true };
}
