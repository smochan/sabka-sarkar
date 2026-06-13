import { ImageResponse } from "next/og";
import { brandColors } from "@/lib/brand";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

// Agitprop share card. Colors come from brand.ts (the single source of truth,
// shared with the site + Twitter assets). Fonts stay satori-safe (Arial
// Black / Arial) — Teko isn't loaded into satori to keep OG rendering robust;
// the heavy uppercase + thick tricolor + stamp carry the poster identity.
export function ogResponse(opts: {
  eyebrow: string;
  title: string;
  footer: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: brandColors.ink,
          padding: "64px 72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* thick tricolor rail */}
        <div style={{ display: "flex", height: "16px", width: "100%" }}>
          <div style={{ flex: 1, backgroundColor: brandColors.saffron }} />
          <div style={{ flex: 1, backgroundColor: brandColors.paper }} />
          <div style={{ flex: 1, backgroundColor: brandColors.green }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <div
              style={{
                fontSize: "24px",
                letterSpacing: "6px",
                textTransform: "uppercase",
                color: brandColors.saffron,
                fontWeight: 700,
              }}
            >
              {opts.eyebrow}
            </div>
            {/* stamp */}
            <div
              style={{
                display: "flex",
                fontSize: "18px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#b9b2a7",
                border: "2px solid #5a534b",
                padding: "4px 12px",
                transform: "rotate(-4deg)",
                fontWeight: 700,
              }}
            >
              Owned by no one
            </div>
          </div>
          <div
            style={{
              fontSize: "92px",
              lineHeight: 0.98,
              letterSpacing: "-1px",
              textTransform: "uppercase",
              fontWeight: 800,
              color: brandColors.paper,
              marginTop: "26px",
              maxWidth: "1056px",
            }}
          >
            {opts.title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: brandColors.paper,
            borderTop: "3px solid #2e2a25",
            paddingTop: "28px",
          }}
        >
          <div
            style={{
              fontSize: "40px",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Sabka Sarkar
          </div>
          <div style={{ fontSize: "26px", color: "#b9b2a7" }}>{opts.footer}</div>
        </div>
      </div>
    ),
    { ...ogSize }
  );
}
