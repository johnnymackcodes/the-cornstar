import { ImageResponse } from "next/og";

export const alt = "CORNSTAR™ — The OG Isn't Done Yet";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(120% 90% at 50% 20%, #1b1710 0%, #0a0806 60%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 34,
            letterSpacing: 14,
            color: "#e7b24c",
            textTransform: "uppercase",
            marginBottom: 10,
          }}
        >
          America&apos;s Most Decorated Vegetable
        </div>
        <div
          style={{
            fontSize: 190,
            fontWeight: 900,
            lineHeight: 0.9,
            letterSpacing: -4,
            display: "flex",
            background: "linear-gradient(180deg, #f7dd8f, #e7b24c 55%, #a9761f)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          CORNSTAR
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 44,
            fontWeight: 800,
            letterSpacing: 4,
            color: "#f5eedd",
            textTransform: "uppercase",
          }}
        >
          The OG Isn&apos;t Done Yet.
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 44,
            fontSize: 22,
            letterSpacing: 8,
            color: "#cbc2ad",
            textTransform: "uppercase",
          }}
        >
          🌽 Official Website · Producewood
        </div>
      </div>
    ),
    { ...size }
  );
}
