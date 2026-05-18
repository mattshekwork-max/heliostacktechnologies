import { ImageResponse } from "next/og";
import { SocialCard } from "../lib/socialCard";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <SocialCard
        eyebrow="HelioStack App"
        title="SolarOps"
        headline="Solar handoffs, cleaned up for operations."
        description="Turn messy post-sale solar handoffs into operations-ready project context for install, permitting, and customer follow-up."
        chips={[
          "Post-sale cleanup",
          "Ops-ready context",
          "Fewer handoff mistakes",
        ]}
        accent="green"
        badge="In development"
        mark="S"
        flat
      />
    ),
    size,
  );
}
