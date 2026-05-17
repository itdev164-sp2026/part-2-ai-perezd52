"use server";

import { redirect } from "next/navigation";
import { createServerActionSupabase } from "@/lib/supabase/server-action-client";

export async function signIn(formData: FormData) {
  const data = Object.fromEntries(formData) as { email?: string; password?: string };
  const supabase = createServerActionSupabase();

  const res = await supabase.auth.signInWithPassword({
    email: data.email ?? "",
    password: data.password ?? "",
  });

  if (res.error) {
    // For server actions used as form actions, throwing will surface errors in the UI.
    throw new Error(res.error.message);
  }

  redirect("/projects");
}

export async function signUp(formData: FormData) {
  const data = Object.fromEntries(formData) as { email?: string; password?: string };
  const supabase = createServerActionSupabase();

  const res = await supabase.auth.signUp({
    email: data.email ?? "",
    password: data.password ?? "",
  });

  if (res.error) {
    throw new Error(res.error.message);
  }

  redirect("/projects");
}
