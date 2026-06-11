import { getNominee } from "@/lib/db";
import { ogResponse, ogSize, ogContentType } from "@/lib/og";

export const alt = "A nominee for India's Dream Cabinet";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  let name = "A nominee for India's Dream Cabinet";
  try {
    const nominee = await getNominee(Number(id));
    if (nominee) name = nominee.name;
  } catch {
    /* fall back to default */
  }
  return ogResponse({
    eyebrow: "Nominated for the Dream Cabinet",
    title: name,
    footer: "Read their record + vote",
  });
}
