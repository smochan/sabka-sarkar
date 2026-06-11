import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

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
          backgroundColor: "#1a1714",
          padding: "72px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", height: "10px", width: "100%" }}>
          <div style={{ flex: 1, backgroundColor: "#FF9933" }} />
          <div style={{ flex: 1, backgroundColor: "#f4efe7" }} />
          <div style={{ flex: 1, backgroundColor: "#138808" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "26px",
              letterSpacing: "5px",
              textTransform: "uppercase",
              color: "#FF9933",
              fontFamily: "Arial, sans-serif",
            }}
          >
            {opts.eyebrow}
          </div>
          <div
            style={{
              fontSize: "78px",
              lineHeight: 1.05,
              color: "#f4efe7",
              marginTop: "22px",
              maxWidth: "1040px",
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
            color: "#f4efe7",
          }}
        >
          <div style={{ fontSize: "38px", fontWeight: 700 }}>Sabka Sarkar</div>
          <div
            style={{
              fontSize: "26px",
              color: "#b9b2a7",
              fontFamily: "Arial, sans-serif",
            }}
          >
            {opts.footer}
          </div>
        </div>
      </div>
    ),
    { ...ogSize }
  );
}
