import * as React from "react";

const badgeStyles = {
  blue: {
    background: "linear-gradient(135deg, #38bdf8, #2563eb)",
    border: "rgba(125, 211, 252, 0.26)",
    glow: "rgba(56, 189, 248, 0.22)",
    line: "rgba(125, 211, 252, 0.16)",
  },
  green: {
    background: "linear-gradient(135deg, #22c55e, #16a34a)",
    border: "rgba(134, 239, 172, 0.26)",
    glow: "rgba(34, 197, 94, 0.2)",
    line: "rgba(134, 239, 172, 0.14)",
  },
  purple: {
    background: "linear-gradient(135deg, #a855f7, #ec4899)",
    border: "rgba(233, 213, 255, 0.26)",
    glow: "rgba(217, 70, 239, 0.2)",
    line: "rgba(233, 213, 255, 0.14)",
  },
};

type Accent = keyof typeof badgeStyles;

export type SocialCardProps = {
  eyebrow: string;
  title: string;
  headline: string;
  description: string;
  chips: string[];
  accent?: Accent;
  badge?: string;
  mark?: string;
  flat?: boolean;
};

export function SocialCard({
  eyebrow,
  title,
  headline,
  description,
  chips,
  accent = "blue",
  badge,
  mark,
  flat = false,
}: SocialCardProps) {
  const theme = badgeStyles[accent];
  const background = flat
    ? "#000000"
    : accent === "green"
      ? "radial-gradient(circle at top left, #22c55e 0%, #0f172a 36%, #020617 100%)"
      : accent === "purple"
        ? "radial-gradient(circle at top left, #a855f7 0%, #0f172a 36%, #020617 100%)"
        : "radial-gradient(circle at top left, #38bdf8 0%, #0f172a 36%, #020617 100%)";
  const overlay = flat
    ? "transparent"
    : accent === "green"
      ? "linear-gradient(135deg, rgba(34,197,94,0.2), rgba(16,185,129,0.08) 35%, rgba(15,23,42,0) 72%)"
      : accent === "purple"
        ? "linear-gradient(135deg, rgba(168,85,247,0.2), rgba(236,72,153,0.08) 35%, rgba(15,23,42,0) 72%)"
        : "linear-gradient(135deg, rgba(56,189,248,0.22), rgba(37,99,235,0.08) 35%, rgba(15,23,42,0) 72%)";
  const gridLine = flat ? "transparent" : theme.line;
  const markBackground = flat && accent === "green" ? "#16a34a" : theme.background;

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background,
        color: "#f8fafc",
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      <div style={{ position: "absolute", inset: 0, background: overlay }} />

      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            `linear-gradient(${gridLine} 1px, transparent 1px), linear-gradient(90deg, ${gridLine} 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.5), transparent 85%)",
        }}
      />

      {!flat ? (
        <>
          <div
            style={{
              position: "absolute",
              top: -120,
              right: -70,
              width: 420,
              height: 420,
              borderRadius: 999,
              background: theme.glow,
              filter: "blur(24px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: -120,
              bottom: -180,
              width: 460,
              height: 460,
              borderRadius: 999,
              background: theme.glow,
              filter: "blur(38px)",
              opacity: 0.8,
            }}
          />
        </>
      ) : null}

      <div
        style={{
          position: "absolute",
          right: 62,
          top: 84,
          bottom: 84,
          width: 278,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 24,
          borderRadius: 32,
          border: `1px solid ${theme.border}`,
          background: "linear-gradient(180deg, rgba(15,23,42,0.86), rgba(15,23,42,0.68))",
          boxShadow: "0 30px 90px rgba(2, 6, 23, 0.36)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 15, letterSpacing: 1.8, textTransform: "uppercase", color: "rgba(226,232,240,0.62)" }}>
            Signal
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 999,
                  background: i === 0 ? "#f8fafc" : "rgba(148, 163, 184, 0.3)",
                }}
              />
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.15 }}>{title}</div>
          <div style={{ height: 1, background: theme.border, width: "100%" }} />
          {chips.slice(0, 3).map((chip, index) => (
            <div key={chip} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 999,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(255,255,255,0.06)",
                  border: `1px solid ${theme.border}`,
                  fontSize: 13,
                  fontWeight: 700,
                }}
              >
                0{index + 1}
              </div>
              <div style={{ fontSize: 16, lineHeight: 1.35, color: "rgba(226, 232, 240, 0.82)" }}>{chip}</div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            padding: 16,
            borderRadius: 22,
            border: `1px solid ${theme.border}`,
            background: "rgba(255,255,255,0.04)",
          }}
        >
          <div style={{ fontSize: 13, letterSpacing: 1.4, textTransform: "uppercase", color: "rgba(226,232,240,0.58)" }}>
            Positioning
          </div>
          <div style={{ fontSize: 17, lineHeight: 1.4, color: "rgba(248,250,252,0.92)" }}>{description}</div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          padding: "54px 64px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingRight: 320 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                width: 58,
                height: 58,
                borderRadius: 18,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: markBackground,
                fontSize: 28,
                fontWeight: 800,
                color: "white",
                boxShadow: flat ? "none" : `0 18px 44px ${theme.glow}`,
              }}
            >
              {mark ?? title.slice(0, 1)}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <div style={{ fontSize: 20, letterSpacing: 1.6, textTransform: "uppercase", opacity: 0.74 }}>
                {eyebrow}
              </div>
              <div style={{ fontSize: 28, fontWeight: 700 }}>{title}</div>
            </div>
          </div>
          {badge ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "12px 18px",
                borderRadius: 999,
                background: "rgba(15, 23, 42, 0.5)",
                border: `1px solid ${theme.border}`,
                fontSize: 18,
                color: "rgba(248,250,252,0.92)",
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 999,
                  background: "#f8fafc",
                }}
              />
              {badge}
            </div>
          ) : null}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 720 }}>
          <div style={{ fontSize: 78, fontWeight: 800, lineHeight: 1.01, letterSpacing: -2.4 }}>{headline}</div>
          <div style={{ fontSize: 30, lineHeight: 1.35, color: "rgba(226, 232, 240, 0.9)", maxWidth: 690 }}>{description}</div>
        </div>

        <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap", maxWidth: 760 }}>
          {chips.map((label) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "14px 18px",
                borderRadius: 18,
                background: "rgba(15, 23, 42, 0.58)",
                border: `1px solid ${theme.border}`,
                fontSize: 20,
                color: "#e2e8f0",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
