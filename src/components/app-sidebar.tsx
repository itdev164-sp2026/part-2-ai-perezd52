"use client"

import Link from "next/link";
import { FolderOpen, Home, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";

interface AppSidebarProps {
  children: React.ReactNode;
}

export function AppSidebar({ children }: AppSidebarProps) {
  return (
    <SidebarProvider defaultOpen>
      <div className="flex min-h-[calc(100vh-4rem)] overflow-hidden rounded-3xl border border-border bg-background shadow-sm">
        <Sidebar collapsible="icon" className="bg-card">
          <SidebarHeader className="flex items-center justify-between gap-2 px-4 py-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                Workspace
              </p>
              <p className="text-sm font-semibold text-foreground">Main nav</p>
            </div>
            <SidebarTrigger className="md:hidden" />
          </SidebarHeader>

          <SidebarSeparator />

          <SidebarContent className="px-2 py-3">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive>
                  <Link href="/" className="flex items-center gap-2">
                    <Home className="h-4 w-4" />
                    <span>Overview</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/projects" className="flex items-center gap-2">
                    <FolderOpen className="h-4 w-4" />
                    <span>Projects</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/settings" className="flex items-center gap-2">
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>

          <SidebarFooter className="mt-auto px-4 py-4">
            <p className="text-xs text-muted-foreground">
              Collapsible dashboard navigation for your profile.
            </p>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset className="min-h-full w-full bg-background">
          <div className="border-b border-border bg-background/90 px-4 py-5 backdrop-blur-sm sm:px-6">
            <div className="flex items-center justify-end">
              <SidebarTrigger />
            </div>
          </div>

          <div className="px-4 py-6 sm:px-6">{children}</div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
