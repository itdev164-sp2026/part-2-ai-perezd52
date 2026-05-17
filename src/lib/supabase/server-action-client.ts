import { createServerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;

export function createServerActionSupabase() {
  return createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      getAll: () => {
        const all = cookies().getAll();
        return all.map((c) => ({ name: c.name, value: c.value }));
      },
    },
  });
}

export type ServerActionSupabase = ReturnType<typeof createServerActionSupabase>;
