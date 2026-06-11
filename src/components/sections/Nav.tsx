import Link from "next/link";
import { site } from "@/content/site";
import { SignInButton } from "@/components/auth/SignInButton";

const authEnabled = process.env.NEXT_PUBLIC_AUTH_ENABLED === "true";

const links = [
  { href: "/#cabinet", label: "The Cabinet" },
  { href: "/#plan", label: "The Plan" },
  { href: "/sortition", label: "The Reform" },
  { href: "/end-goal", label: "End Goal" },
  { href: "/sources", label: "Sources" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-paper/80 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="container-wide flex h-16 items-center justify-between gap-4"
      >
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="font-deva text-xl leading-none text-ink">
            {site.nameDeva}
          </span>
          <span className="hidden text-sm font-semibold uppercase tracking-[0.16em] text-ink-faint group-hover:text-saffron-ink sm:inline">
            {site.name}
          </span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <ul className="mr-2 hidden items-center gap-6 text-sm text-ink-soft md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="transition-colors hover:text-saffron-ink"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          {authEnabled && <SignInButton />}
          <Link
            href="/#cabinet"
            className="inline-flex h-9 items-center rounded-md bg-ink px-4 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5"
          >
            Nominate
          </Link>
        </div>
      </nav>
    </header>
  );
}
