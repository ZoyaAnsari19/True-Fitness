import type { Metadata } from "next";
import Script from "next/script";
import { RevealOnScroll } from "../components/RevealOnScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "True Fitness — Transform Your Fitness Journey",
  description:
    "True Fitness - Premium gym management with personal training, workout tracking, diet plans, and membership management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css"
          rel="stylesheet"
        />
        <link href="/static/style.css" rel="stylesheet" />
      </head>
      <body>
        <RevealOnScroll />
        {children}
        <Script src="/static/app.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
