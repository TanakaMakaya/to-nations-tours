import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import JournalPreview from "@/components/JournalPreview";


export const metadata: Metadata = {
 metadataBase: new URL("https://www.tonationstours.com"),

  title: {
    default: "To Nations Tours",
    template: "%s | To Nations Tours",
  },

  description:
    "Authentic journeys and meaningful memories across South Africa, Zimbabwe and Botswana.",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },

  openGraph: {
    title: "To Nations Tours",
    description:
      "Authentic journeys and meaningful memories across Southern Africa.",
    url: "https://www.tonationstours.com",
    siteName: "To Nations Tours",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "To Nations Tours — Authentic African journeys",
      },
    ],
    type: "website",
  },
};


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