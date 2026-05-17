"use server";

import { redirect } from "next/navigation";
import { createServerActionSupabase } from "@/lib/supabase/server-action-client";
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

  const supabase = createServerActionSupabase();

  const { error } = await supabase.from("projects").insert({ ...parsed.data, user_id: (await supabase.auth.getUser()).data.user?.id });

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true };
}

export async function signOut() {
  const supabase = createServerActionSupabase();
  await supabase.auth.signOut();
  redirect("/login");
}
