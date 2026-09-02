import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "CORNSTAR™ — The OG Isn't Done Yet";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  const logo = readFileSync(
    join(process.cwd(), "assets", "cornstar-logo.png")
  ).toString("base64");
  const logoSrc = `data:image/png;base64,${logo}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          background:
            "radial-gradient(130% 100% at 50% 30%, #1b1710 0%, #0a0806 62%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          width={900}
          height={600}
          alt=""
          style={{ objectFit: "contain" }}
        />
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 0,
            right: 0,
            textAlign: "center",
            fontSize: 22,
            letterSpacing: 12,
            textTransform: "uppercase",
            color: "#e7b24c",
          }}
        >
          America&apos;s Most Decorated Vegetable
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 34,
            left: 0,
            right: 0,
            textAlign: "center",
            fontSize: 20,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#cbc2ad",
          }}
        >
          🌽 Official Website · Producewood
        </div>
      </div>
    ),
    { ...size }
  );
}
