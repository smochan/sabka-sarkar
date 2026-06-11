import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const googleConfigured = Boolean(
  process.env.AUTH_GOOGLE_ID && process.env.AUTH_GOOGLE_SECRET
);

/** True only when Google sign-in is fully configured. */
export function isAuthConfigured(): boolean {
  return Boolean(process.env.AUTH_SECRET) && googleConfigured;
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  trustHost: true,
  providers: googleConfigured
    ? [
        Google({
          clientId: process.env.AUTH_GOOGLE_ID,
          clientSecret: process.env.AUTH_GOOGLE_SECRET,
        }),
      ]
    : [],
});

/** Server-derived voter key for a signed-in user, or null. */
export async function sessionVoterKey(): Promise<{
  key: string;
  name: string | null;
} | null> {
  if (!isAuthConfigured()) return null;
  try {
    const session = await auth();
    const u = session?.user;
    if (!u) return null;
    const id = u.email ?? u.name ?? "";
    if (!id) return null;
    return { key: `user:${id}`, name: u.name ?? null };
  } catch {
    return null;
  }
}
