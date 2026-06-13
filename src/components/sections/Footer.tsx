import Link from "next/link";
import { site, legal } from "@/content/site";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="bg-paper-2 text-ink-soft" style={{ borderTop: "4px solid transparent", borderImage: "linear-gradient(to right, #ff8a1f 33.33%, #ffffff 33.33% 66.66%, #0f7a2e 66.66%) 1" }}>
      <div className="container-wide py-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <Logo size={32} />
              <span className="font-deva text-2xl text-ink">
                {site.nameDeva}
              </span>
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-ink-soft [font-family:var(--font-poster)]">
                {site.name}
              </span>
            </div>
            <p className="mt-3 text-sm text-ink-soft">{site.tagline}</p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
              <Link href="/cabinet" className="hover:text-saffron-ink">
                The Cabinet
              </Link>
              <Link href="/#plan" className="hover:text-saffron-ink">
                The Plan
              </Link>
              <Link href="/sortition" className="hover:text-saffron-ink">
                The Reform
              </Link>
              <Link href="/end-goal" className="hover:text-saffron-ink">
                End Goal
              </Link>
              <Link href="/sources" className="hover:text-saffron-ink">
                Sources &amp; methodology
              </Link>
              <a
                href={`mailto:${legal.removalEmail}`}
                className="hover:text-saffron-ink"
              >
                Contact
              </a>
            </div>

            {/* Evidence briefs row */}
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.14em] text-ink-faint">
                Evidence briefs
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
                <Link href="/plan/health" className="hover:text-saffron-ink">
                  Health
                </Link>
                <Link href="/plan/education" className="text-ink-faint hover:text-saffron-ink">
                  Education
                </Link>
                <Link href="/plan/jobs" className="text-ink-faint hover:text-saffron-ink">
                  Jobs
                </Link>
              </div>
            </div>
          </nav>
        </div>

        <div className="mt-12 space-y-3 border-t border-ink/15 pt-8 text-xs leading-relaxed text-ink-faint">
          <p>{legal.disclaimer}</p>
          <p>
            {legal.removalNote}{" "}
            <a
              href={`mailto:${legal.removalEmail}`}
              className="underline underline-offset-2 hover:text-saffron-ink"
            >
              {legal.removalEmail}
            </a>
          </p>
          <p>
            &copy; {new Date().getFullYear()} {site.name}. A non-partisan civic
            thought experiment. Built in the open.
          </p>
        </div>
      </div>
    </footer>
  );
}
