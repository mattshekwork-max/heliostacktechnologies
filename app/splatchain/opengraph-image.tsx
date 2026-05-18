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
        title="SplatChain"
        headline="Prove every 3D capture is real."
        description="Signatures, deterministic hashing, and Base-compatible on-chain attestation for provenance workflows."
        chips={["Capture authenticity", "Model traceability", "Portable verification"]}
        accent="blue"
        badge="In development"
        mark="S"
      />
    ),
    size,
  );
}
