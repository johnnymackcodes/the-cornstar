import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(160deg, #1b1710, #0a0806)",
          borderRadius: 14,
          fontSize: 40,
        }}
      >
        🌽
      </div>
    ),
    { ...size }
  );
}
