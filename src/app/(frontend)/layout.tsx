
import type { Metadata } from "next";
import config from "@payload-config";
import { getPayload } from "payload";

import "../globals.css";
import Navbar from "@/components/navbar";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import JournalPreview from "@/components/JournalPreview";

const metadataBase = new URL("https://www.tonationstours.com");

async function getSiteSettings() {
  const payload = await getPayload({ config });

  return payload.findGlobal({
    slug: "site-settings",
    depth: 1,
  });
}

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();

  const siteName = settings.siteName || "To Nations Tours";

  const defaultTitle =
    settings.seo?.defaultTitle || siteName;

  const defaultDescription =
    settings.seo?.defaultDescription ||
    "Authentic journeys and meaningful memories across South Africa, Zimbabwe and Botswana.";

  const favicon =
    typeof settings.favicon === "object" &&
    settings.favicon !== null
      ? settings.favicon.url
      : null;

  const shareImage =
    typeof settings.seo?.defaultShareImage === "object" &&
    settings.seo.defaultShareImage !== null
      ? settings.seo.defaultShareImage.url
      : null;

  return {
    metadataBase,

    title: {
      default: defaultTitle,
      template: `%s | ${siteName}`,
    },

    description: defaultDescription,

    icons: {
      icon: favicon || "/favicon.ico",
      shortcut: favicon || "/favicon.ico",
    },

    openGraph: {
      title: defaultTitle,
      description: defaultDescription,
      url: "https://www.tonationstours.com",
      siteName,
      images: [
        {
          url: shareImage || "/opengraph-image.jpg",
          width: 1200,
          height: 630,
          alt: `${siteName} — Authentic African journeys`,
        },
      ],
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: defaultTitle,
      description: defaultDescription,
      images: [shareImage || "/opengraph-image.jpg"],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}

        <JournalPreview />

        <Footer />

        <Chatbot />

        <SpeedInsights />
      </body>
    </html>
  );
}
