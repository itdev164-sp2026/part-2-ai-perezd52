"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { signIn, signUp } from "@/app/(auth)/actions";

export function AuthForm() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");

  return (
    <Card>
      <CardHeader>
        <CardTitle>{mode === "signin" ? "Sign In" : "Sign Up"}</CardTitle>
        <CardDescription>{mode === "signin" ? "Access your account." : "Create a new account."}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex gap-2">
            <button
              type="button"
              className={`rounded-md px-3 py-1 ${mode === "signin" ? "bg-primary text-primary-foreground" : "bg-muted"}`}
              onClick={() => setMode("signin")}
            >
              Sign In
            </button>
            <button
              type="button"
              className={`rounded-md px-3 py-1 ${mode === "signup" ? "bg-primary text-primary-foreground" : "bg-muted"}`}
              onClick={() => setMode("signup")}
            >
              Sign Up
            </button>
          </div>

          <form action={mode === "signin" ? signIn : signUp} className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Email</label>
              <Input name="email" type="email" placeholder="you@example.com" required />
            </div>

            <div>
              <label className="block text-sm font-medium text-muted-foreground">Password</label>
              <Input name="password" type="password" placeholder="Enter a strong password" required />
            </div>

            <div className="flex items-center justify-between">
              <Button type="submit">{mode === "signin" ? "Sign In" : "Create Account"}</Button>
            </div>
          </form>
        </div>
      </CardContent>
    </Card>
  );
}
