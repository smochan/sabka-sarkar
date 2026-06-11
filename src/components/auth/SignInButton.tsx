"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { LogIn, LogOut } from "lucide-react";

export function SignInButton() {
  const { data, status } = useSession();

  if (status === "authenticated") {
    const first = data.user?.name?.split(" ")[0] ?? "You";
    return (
      <button
        type="button"
        onClick={() => signOut()}
        className="inline-flex h-9 items-center gap-1.5 rounded-md border border-border px-3 text-sm font-semibold text-ink-soft transition-colors hover:bg-paper-2"
        title="Sign out"
      >
        <LogOut className="h-4 w-4" aria-hidden="true" /> {first}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => signIn("google")}
      className="inline-flex h-9 items-center gap-1.5 rounded-md border border-border px-3 text-sm font-semibold text-ink-soft transition-colors hover:bg-paper-2"
    >
      <LogIn className="h-4 w-4" aria-hidden="true" /> Sign in
    </button>
  );
}
