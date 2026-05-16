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

## Activity 3: Server-Side Data with Supabase

### Prompt 1

**What I asked:**

>
Using the Supabase client at src/lib/supabase.ts, create a new Server Component
at src/app/projects/page.tsx that:

1. Fetches all records from the "projects" table in Supabase
2. Displays them in a professional layout using shadcn/ui Card components
   (run `npx shadcn@latest add card` if needed)
3. Each card should show the project title, description, and a status badge
4. The status badge should be color-coded:
   - "active" = green
   - "completed" = blue
   - "archived" = gray

Use @workspace context to match the styling of our existing Dashboard.
This must be a React Server Component (async function, no "use client").
Do NOT use useEffect or useState for data fetching.

**What happened:**

>
Co-Pilot executed this prompt correctly and made all the correct edits to the code.

### Prompt 2

**What I asked:**

>
The breadcrumb in src/app/layout.tsx always shows "Overview" because the page
name is hardcoded. Extract the breadcrumb into its own client component at
src/components/breadcrumb-nav.tsx that uses usePathname() from next/navigation
to display the correct page name. Map "/" to "Overview", "/projects" to
"Projects", and "/settings" to "Settings". Keep "ITDEV-164" as the first
breadcrumb segment. Then update layout.tsx to use the new component.

**What happened:**

> 
Co-Pilot executed the prompt correctly and edited the code with no problems or issues.

### Reflection

> 
I like the server side data fetching over the UseEffect from web prog 1. It feels faster and easier to update and use. This could also just be because of Supabase.

## Activity 4: AI-Driven Forms & Validation

### Prompt 1

**What I asked:**

>
Create a Zod validation schema in a new file src/lib/schemas.ts for a "Project"
with the following fields:

- title: string, minimum 3 characters, with a custom error message
  "Title must be at least 3 characters"
- description: string, minimum 10 characters, with a custom error message
  "Description must be at least 10 characters"
- status: enum with values "active", "completed", "archived"

Export the schema and also export the inferred TypeScript type using z.infer.

**What happened:**

> 
The AI did what I wanted only the second time though. The first time VSC said that it took
too long to generate what I wanted. I just tried again and it worked.

### Prompt 2

**What I asked:**

>
Using the Zod schema from src/lib/schemas.ts, do the following:

1. Create a form component at src/components/project-form.tsx that:
   - Is a Client Component ("use client") because it uses react-hook-form hooks
   - Uses react-hook-form with the zodResolver from @hookform/resolvers for validation
   - Uses shadcn/ui Field, FieldLabel, and FieldError for field layout
   - Uses shadcn/ui Input for title, Textarea for description, and Select for status
   - Shows inline error messages under each field when validation fails
   - Has a "Create Project" submit button
   - Shows a sonner toast notification on successful submission

2. Create a Server Action at src/app/actions.ts that:
   - Has "use server" at the top of the file
   - Accepts the validated form data
   - Validates it again with the Zod schema (server-side validation)
   - Inserts the validated data into the Supabase "projects" table
   - Returns a success or error response

3. Create a new page at src/app/projects/new/page.tsx that renders
   the project form within the dashboard layout.

4. Add a "New Project" button to the existing projects page
   (src/app/projects/page.tsx) that links to /projects/new.

Use @workspace to match the existing project styling.

**What happened:**

> 
The AI did the task asked the first time. It did not miss anything and it wasn't
any longer than any other response.

### Reflection

> 
Made me think that the forms are easier now especially with the AI.
AI is making me realize more and more that you just need the correct prompt 
to generate what you want.
