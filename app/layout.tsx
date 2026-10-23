import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jeri-Michael Joseph Advincula | Software & Web Developer",
  description:
    "Portfolio of Jeri-Michael Joseph Advincula — web development, Shopify, WordPress, SEO, accessibility, AI/ML, and software projects.",
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
