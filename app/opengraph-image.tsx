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
          background: "#000000",
          color: "#EDEDF0",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 18,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#A1A1AA",
            fontFamily: "monospace",
            marginBottom: 28,
          }}
        >
          Founder · Argus Labs
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 400,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            fontFamily: "Georgia, serif",
          }}
        >
          Varad Durge.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#A1A1AA",
            marginTop: 28,
            maxWidth: 720,
          }}
        >
          Forensic observability for AI agent pipelines.
        </div>
      </div>
    ),
    { ...size },
  );
}
