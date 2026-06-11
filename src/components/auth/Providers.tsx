"use client";

import { useEffect } from "react";
import { SessionProvider, useSession } from "next-auth/react";
import { setIdentity } from "@/lib/voter";

function SyncIdentity() {
  const { data, status } = useSession();
  useEffect(() => {
    if (status === "authenticated" && data?.user) {
      const id = data.user.email ?? data.user.name ?? "x";
      setIdentity(`user:${id}`, data.user.name ?? null);
    } else if (status === "unauthenticated") {
      setIdentity(null, null);
    }
  }, [status, data]);
  return null;
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <SyncIdentity />
      {children}
    </SessionProvider>
  );
}
