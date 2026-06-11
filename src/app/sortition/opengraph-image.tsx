import { ogResponse, ogSize, ogContentType } from "@/lib/og";

export const alt = "What is sortition? — Apni Sarkar";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogResponse({
    eyebrow: "Government by the people, literally",
    title: "What if we chose leaders by lottery, not by money?",
    footer: "Understand sortition",
  });
}
