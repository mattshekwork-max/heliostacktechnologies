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
        title="Pick.UP"
        headline="Answer more calls. Capture intent. Follow up cleanly."
        description="An AI phone receptionist for small service businesses that need better call coverage and sharper follow-up."
        chips={["Always-on answering", "Intent capture", "Clean follow-up"]}
        accent="purple"
        badge="Active product"
        mark="P"
      />
    ),
    size,
  );
}
