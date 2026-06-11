import { ImageResponse } from "next/og";

export const alt = "Sabka Sarkar — If the best of our generation ran the country.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
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
        {/* tricolor rail */}
        <div style={{ display: "flex", height: "10px", width: "100%" }}>
          <div style={{ flex: 1, backgroundColor: "#FF9933" }} />
          <div style={{ flex: 1, backgroundColor: "#f4efe7" }} />
          <div style={{ flex: 1, backgroundColor: "#138808" }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "26px",
              letterSpacing: "6px",
              textTransform: "uppercase",
              color: "#FF9933",
              fontFamily: "Arial, sans-serif",
            }}
          >
            An open thought experiment for India
          </div>
          <div
            style={{
              fontSize: "82px",
              lineHeight: 1.05,
              color: "#f4efe7",
              marginTop: "24px",
              maxWidth: "1000px",
            }}
          >
            What if the best people of our generation ran the country?
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
          <div style={{ fontSize: "40px", fontWeight: 700 }}>Sabka Sarkar</div>
          <div
            style={{
              fontSize: "28px",
              color: "#b9b2a7",
              fontFamily: "Arial, sans-serif",
            }}
          >
            Nominate your cabinet
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
