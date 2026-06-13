import type { Metadata } from "next";
import { Teko, Yatra_One, Inter, Tiro_Devanagari_Hindi } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { site } from "@/content/site";
import { Providers } from "@/components/auth/Providers";
import "./globals.css";

const authEnabled = process.env.NEXT_PUBLIC_AUTH_ENABLED === "true";

// Teko — condensed display by Indian Type Foundry; covers Latin + Devanagari,
// so one family carries both "SABKA SARKAR" and "सबकी सरकार".
const teko = Teko({
  variable: "--font-poster",
  subsets: ["latin", "devanagari"],
  weight: ["500", "600", "700"],
  display: "swap",
});

// Yatra One — hand-painted Mumbai railway-signage display; protest-placard energy.
const yatraOne = Yatra_One({
  variable: "--font-placard",
  subsets: ["latin", "devanagari"],
  weight: "400",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const tiroDevanagari = Tiro_Devanagari_Hindi({
  variable: "--font-deva",
  subsets: ["devanagari", "latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${teko.variable} ${yatraOne.variable} ${inter.variable} ${tiroDevanagari.variable} h-full`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-paper text-ink">
        {authEnabled ? <Providers>{children}</Providers> : children}
        <Analytics />
      </body>
    </html>
  );
}
