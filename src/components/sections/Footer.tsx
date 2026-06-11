import Link from "next/link";
import { site, legal } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-ink text-paper/70">
      <div className="container-wide py-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-baseline gap-2">
              <span className="font-deva text-2xl text-paper">
                {site.nameDeva}
              </span>
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-paper/60">
                {site.name}
              </span>
            </div>
            <p className="mt-3 text-sm text-paper/60">{site.tagline}</p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
              <Link href="/#cabinet" className="hover:text-saffron">
                The Cabinet
              </Link>
              <Link href="/#plan" className="hover:text-saffron">
                The Plan
              </Link>
              <Link href="/sortition" className="hover:text-saffron">
                The Reform
              </Link>
              <Link href="/end-goal" className="hover:text-saffron">
                End Goal
              </Link>
              <Link href="/sources" className="hover:text-saffron">
                Sources &amp; methodology
              </Link>
              <a
                href={`mailto:${legal.removalEmail}`}
                className="hover:text-saffron"
              >
                Contact
              </a>
            </div>

            {/* Evidence briefs row */}
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.14em] text-paper/40">
                Evidence briefs
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
                <Link href="/plan/health" className="hover:text-saffron">
                  Health
                </Link>
                <Link href="/plan/education" className="hover:text-saffron text-paper/50">
                  Education
                </Link>
                <Link href="/plan/jobs" className="hover:text-saffron text-paper/50">
                  Jobs
                </Link>
              </div>
            </div>
          </nav>
        </div>

        <div className="mt-12 space-y-3 border-t border-paper/12 pt-8 text-xs leading-relaxed text-paper/50">
          <p>{legal.disclaimer}</p>
          <p>
            {legal.removalNote}{" "}
            <a
              href={`mailto:${legal.removalEmail}`}
              className="underline underline-offset-2 hover:text-saffron"
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
