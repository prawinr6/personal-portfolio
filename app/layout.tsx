import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { assetPath } from "@/lib/asset-path";

export const metadata: Metadata = {
  title: "Prawin Raj S S — Senior Testing Engineer",
  description: "Prawin Raj S S is a senior testing engineer based in Bengaluru, specializing in Selenium, Python, Appium, API testing, and continuous quality.",
  icons: {
    icon: assetPath("/favicon.svg?v=2"),
    shortcut: assetPath("/favicon.svg?v=2"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased"><Providers>{children}</Providers></body>
    </html>
  );
}
