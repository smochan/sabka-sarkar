import { ogResponse, ogSize, ogContentType } from "@/lib/og";

export const alt = "Sabka Sarkar — sources & methodology";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogResponse({
    eyebrow: "Transparency",
    title: "Every number has a receipt.",
    footer: "Sources & methodology",
  });
}
