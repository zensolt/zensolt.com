import { ImageResponse } from "next/og";
import { SITE_URL } from "@/lib/site";

export const ogImageAlt =
  "Zensolt Consultants — web, mobile, cloud, and AI engineering";
export const ogImageSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export function createOgImageResponse() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background:
            "linear-gradient(145deg, #050a30 0%, #0a1438 42%, #0f1f4a 100%)",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 36,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#050a30",
              border: "2px solid rgba(27, 175, 138, 0.45)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#1baf8a",
              fontSize: 28,
              fontWeight: 700,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Z
          </div>
          <span
            style={{
              fontSize: 22,
              fontWeight: 600,
              color: "#94a3b8",
              letterSpacing: "-0.02em",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Zensolt Consultants
          </span>
        </div>
        <div
          style={{
            fontSize: 58,
            fontWeight: 600,
            color: "#e8f4f1",
            letterSpacing: "-0.03em",
            lineHeight: 1.12,
            maxWidth: 980,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Full-stack product engineering
        </div>
        <div
          style={{
            marginTop: 22,
            fontSize: 28,
            fontWeight: 500,
            color: "#5eead4",
            maxWidth: 900,
            lineHeight: 1.35,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          {`Web, mobile, AWS & AI/ML — one team from discovery to production.`}
        </div>
        <div
          style={{
            marginTop: 44,
            width: 160,
            height: 5,
            borderRadius: 3,
            background: "linear-gradient(90deg, #1baf8a, #5eead4)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 56,
            left: 72,
            fontSize: 18,
            color: "rgba(168, 197, 192, 0.85)",
            fontFamily: "ui-monospace, monospace",
          }}
        >
          {SITE_URL.replace(/^https:\/\//, "")}
        </div>
      </div>
    ),
    { ...ogImageSize }
  );
}
