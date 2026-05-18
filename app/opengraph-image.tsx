import { ImageResponse } from "next/og";
import { SocialCard } from "./lib/socialCard";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <SocialCard
        eyebrow="HelioStack Technologies"
        title="HelioStack"
        headline="Useful systems for small business operators."
        description="SaaS products, AI workflow tools, and practical technology services for clearer operations and faster follow-up."
        chips={["CatchFlow", "Pick.UP", "SplatChain", "Operator-first software"]}
        accent="blue"
        badge="Portfolio + product studio"
        mark="H"
      />
    ),
    size,
  );
}
