import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";


export const metadata: Metadata = {
  title: "To Nations Tours",
  description: "Authentic journeys and meaningful memories across Africa.",
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
          <Footer />
   
          <Chatbot />
          <SpeedInsights />
      </body>
    </html>
  );
}