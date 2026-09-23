import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SiteShell } from "@/components/site/SiteShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-display-serif",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const SITE_URL = "https://emojimoonphase.space";
const SITE_NAME = "Emoji Moon Phase";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Emoji Moon Phase — Live Moon Phase Today & Lunar Calendar",
    template: "%s | Emoji Moon Phase",
  },
  description:
    "Emoji Moon Phase shows the real-time current moon phase as a large moon emoji with a live countdown, full lunar calendar, and clear explanations of every phase. See today's moon emoji, learn how moon phases work, and explore lunar meaning.",
  keywords: [
    "emoji moon phase",
    "moon phase today",
    "moon emoji",
    "current moon phase",
    "lunar calendar",
    "moon phases",
    "today moon emoji",
    "full moon",
    "new moon",
    "lunar cycle",
  ],
  authors: [{ name: "Jacob Moses" }],
  creator: "Jacob Moses",
  publisher: "Emoji Moon Phase",
  applicationName: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/favicon.svg"],
    apple: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Emoji Moon Phase — Live Moon Phase Today & Lunar Calendar",
    description:
      "See the real-time current moon phase as a large moon emoji, with a live countdown to the next full moon, a full lunar calendar, and clear explanations of every phase.",
    images: [
      {
        url: "/opengraph.svg",
        width: 1200,
        height: 630,
        alt: "Emoji Moon Phase — live moon phase today",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emoji Moon Phase — Live Moon Phase Today",
    description:
      "Real-time moon phase as a large emoji, lunar calendar, and explanations of every phase.",
    images: ["/opengraph.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "science",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1A0F2E" },
    { media: "(prefers-color-scheme: dark)", color: "#070313" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <SiteShell>{children}</SiteShell>
        <Toaster />
      </body>
    </html>
  );
}
