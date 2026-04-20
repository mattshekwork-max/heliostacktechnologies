import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HelioStack Technologies LLC - Building Tomorrow",
  description:
    "A holding company focused on building software, automation, and IT products for small businesses.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
