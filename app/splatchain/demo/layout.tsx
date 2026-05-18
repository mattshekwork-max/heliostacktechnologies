import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SplatChain Demo — Verify or Register Your Splat",
  description:
    "Look up any registered Gaussian Splat or stamp your own capture into a permanent public record. Live on Base mainnet.",
  openGraph: {
    title: "SplatChain — Verify or Register Your Splat",
    description:
      "Look up any registered Gaussian Splat or stamp your own capture into a permanent public record. Live on Base mainnet.",
    url: "https://heliostacktechnologies.com/splatchain/demo",
    siteName: "HelioStack Technologies",
    type: "website",
    images: [
      {
        url: "https://heliostacktechnologies.com/social/splatchain-card.png",
        width: 1200,
        height: 630,
        alt: "SplatChain — Verify or Register Your Splat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SplatChain — Verify or Register Your Splat",
    description:
      "Look up any registered Gaussian Splat or stamp your own capture into a permanent public record. Live on Base mainnet.",
    images: ["https://heliostacktechnologies.com/social/splatchain-card.png"],
  },
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
