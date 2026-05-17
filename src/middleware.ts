import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createMiddlewareSupabase } from "./lib/supabase/middleware-client";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const supabase = createMiddlewareSupabase(req, res as unknown as NextResponse);

  // Re-validate the user token with Supabase Auth on every request
  const { data } = await supabase.auth.getUser();
  const user = data.user ?? null;

  const { pathname } = req.nextUrl;

  // Allow access to the login page
  if (pathname === "/login") {
    return res;
  }

  // Protect /projects routes
  if (pathname.startsWith("/projects") && !user) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
