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
        title="CatchFlow"
        headline="Turn missed signals into a calm follow-up queue."
        description="CatchFlow helps small service businesses recover leads from missed calls, buried emails, and texts without inbox chaos."
        chips={["Signal ingest", "Priority sorting", "Action queue"]}
        accent="green"
        badge="Live prototype"
        mark="C"
      />
    ),
    size,
  );
}
