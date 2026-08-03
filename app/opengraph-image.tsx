import { ImageResponse } from "next/og";

export const alt = "Varad Durge — Founder of Argus Labs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#F4F1EB",
          color: "#1A1814",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 20,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#7A7368",
            fontFamily: "monospace",
            marginBottom: 28,
          }}
        >
          Pune · PICT ’27
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 500,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          Varad Durge
        </div>
        <div
          style={{
            width: 56,
            height: 2,
            background: "#0F6E6A",
            marginTop: 24,
            marginBottom: 24,
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#3A3530",
          }}
        >
          Founder of Argus Labs · ECE @ PICT
        </div>
      </div>
    ),
    { ...size },
  );
}
