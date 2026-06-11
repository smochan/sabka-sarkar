import { ogResponse, ogSize, ogContentType } from "@/lib/og";

export const alt = "The end goal — Apni Sarkar";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogResponse({
    eyebrow: "The 5-year vision",
    title: "From a dream cabinet to government by the people.",
    footer: "See the end goal",
  });
}
