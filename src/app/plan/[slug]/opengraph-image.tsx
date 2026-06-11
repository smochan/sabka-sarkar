import { portfolios } from "@/content/cabinet";
import { ogResponse, ogSize, ogContentType } from "@/lib/og";

export const alt = "Sabka Sarkar — evidence brief";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const portfolio = portfolios.find((p) => p.slug === slug);
  return ogResponse({
    eyebrow: "Evidence brief",
    title: portfolio ? `${portfolio.name} — sourced plan` : "A sector plan",
    footer: "Every number has a receipt.",
  });
}
