import { ImageResponse } from "next/og";

export const alt = "Buteo Petrokimya — LG Chem & Basechem Türkiye Distribütörü";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
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
          background: "linear-gradient(135deg, #0d2b1a 0%, #1B4332 60%, #2D6A4F 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#86efac",
            fontWeight: 700,
            marginBottom: 24,
          }}
        >
          Türkiye &amp; Avrupa · İki Dünya Markasının Distribütörü
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 92,
            fontWeight: 800,
            lineHeight: 1.05,
            marginBottom: 20,
          }}
        >
          Buteo Petrokimya
        </div>
        <div style={{ display: "flex", fontSize: 40, color: "rgba(255,255,255,0.85)", marginBottom: 48 }}>
          Mühendislik Plastiği &amp; Plastik Hammadde Tedarikçiniz
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          <div
            style={{
              display: "flex",
              fontSize: 32,
              fontWeight: 700,
              color: "#0d2b1a",
              background: "white",
              padding: "14px 32px",
              borderRadius: 999,
            }}
          >
            LG Chem
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 32,
              fontWeight: 700,
              color: "white",
              border: "2px solid rgba(255,255,255,0.4)",
              padding: "14px 32px",
              borderRadius: 999,
            }}
          >
            Basechem
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
