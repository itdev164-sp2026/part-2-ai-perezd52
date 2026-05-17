import { AuthForm } from "@/components/auth-form";

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-2xl">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Sign In / Sign Up</h1>
        <p className="text-sm text-muted-foreground">Authenticate to access your projects.</p>
      </header>

      <AuthForm />
    </div>
  );
}
