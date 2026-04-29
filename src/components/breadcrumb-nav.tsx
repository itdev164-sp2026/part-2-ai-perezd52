"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const pageNames: Record<string, string> = {
  "/": "Overview",
  "/projects": "Projects",
  "/settings": "Settings",
};

export function BreadcrumbNav() {
  const pathname = usePathname();
  const pageName = pageNames[pathname ?? "/"] ?? "Overview";

  return (
    <nav aria-label="Breadcrumb" className="rounded-3xl border border-border bg-card px-4 py-3 shadow-sm sm:px-6">
      <ol className="flex items-center gap-2 text-sm text-muted-foreground">
        <li>
          <Link href="/" className="font-medium text-primary hover:underline">
            ITDEV-164
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li className="font-semibold text-foreground">{pageName}</li>
      </ol>
    </nav>
  );
}
