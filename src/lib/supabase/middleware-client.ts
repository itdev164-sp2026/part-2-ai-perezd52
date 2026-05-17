import { createServerClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;

function parseCookieHeader(cookieHeader: string | null) {
  if (!cookieHeader) return [] as { name: string; value: string }[];
  return cookieHeader.split(/;\s*/).map((pair) => {
    const idx = pair.indexOf("=");
    if (idx === -1) return { name: pair, value: "" };
    return { name: pair.slice(0, idx), value: decodeURIComponent(pair.slice(idx + 1)) };
  });
}

export function createMiddlewareSupabase(req: NextRequest, res: NextResponse) {
  return createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      getAll: () => {
        const header = req.headers.get("cookie");
        return parseCookieHeader(header);
      },
      // no setAll in middleware helper — middleware shouldn't set cookies here
    },
  });
}

export type MiddlewareSupabase = ReturnType<typeof createMiddlewareSupabase>;
