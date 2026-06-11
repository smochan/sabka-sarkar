import { portfolios } from "@/content/cabinet";
import { ogResponse, ogSize, ogContentType } from "@/lib/og";

export const alt = "A Dream Cabinet ministry channel";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = portfolios.find((x) => x.slug === slug);
  return ogResponse({
    eyebrow: "Dream Cabinet channel",
    title: p ? `Who should lead ${p.name}?` : "A ministry channel",
    footer: "Nominate + debate",
  });
}
