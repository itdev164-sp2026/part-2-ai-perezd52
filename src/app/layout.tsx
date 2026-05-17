import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { AppSidebar } from "@/components/app-sidebar";
import { createServerComponentSupabase } from "@/lib/supabase/server-component-client";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ITDEV-164 — Course Dashboard",
  description: "AI-native web development with Next.js, Tailwind, and Supabase",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const supabase = createServerComponentSupabase();
  const { data } = await supabase.auth.getUser();
  const user = data.user ?? null;

  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="mx-auto max-w-7xl px-4 py-8 space-y-4">
            <BreadcrumbNav />
            <AppSidebar user={user}>{children}</AppSidebar>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
