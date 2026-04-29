# Prompting Log — ITDEV-164

## Activity 1: The AI-Native Launchpad

### Prompt 1
**What I asked:**
> 
Look at the existing src/app/page.tsx and src/app/layout.tsx in this project.
Replace the current homepage content with a "Developer Profile" page for me.
It should include:

My name: Diego Perez
A short bio (1-2 sentences about being a web development student)
A "Skills" section that displays at least 6 skills in a responsive
Tailwind CSS grid (use cards with icons from lucide-react)
Keep the existing Header component and layout structure intact.
If you need to create new components, go ahead and create them in
the src/components/ folder.

**What happened:**
>
Co Pilot did exactly what I wanted it to do however it did edit the layout page
so I had to undo the edit.

### Prompt 2
**What I asked:**
> 
The skills grid should use sm:grid-cols-2 lg:grid-cols-3 for responsive
breakpoints. Can you update that?

**What happened:**
>
Co Pilot checked the skills grid and sure enough there was a mistake so it
fixed the issue with the code.

### Reflection
> Write 2-3 sentences reflecting on the experience. How did it feel
Co Pilot is pretty easy to use in my opinion. I've used Co Pilot before
and it helped a lot with diagnosing the issue as well as resolving it 
while explaining at the same time. It didn't suprise me at all since I've
used it before. I don't think theres anything I would do differently.

## Activity 2: Building the Dashboard Shell

### Prompt 1

**What I asked:**

>
Using the shadcn sidebar components that are now in my src/components/ui/ folder,
create a professional, collapsible dashboard layout. It should include:

A sidebar (src/components/app-sidebar.tsx) with navigation links for:

Overview (use the Home icon from lucide-react)
Projects (use the FolderOpen icon)
Settings (use the Settings icon)
A top navigation area with breadcrumbs showing the current page.

A main content area that wraps the existing page content.

Update src/app/layout.tsx to use the new SidebarProvider and sidebar layout.

Important: Preserve the Developer Profile content from Activity 1 in
src/app/page.tsx — it should appear in the main content area of the new layout.
Keep the dark mode toggle working.

**What happened:**

> 
Co Pilot started with the first step then went in order. It did everything correctly
and there was no error with the code made.
### Prompt 2

**What I asked:**

>
Only one prompt was asked.

**What happened:**

> 
Only on prompt was asked

### Reflection

>
Co Pilot did nothing to hinder what was done in Activity 1. I learned that I
need to be very specific with what I want the AI to create and what I want
it to replace.
