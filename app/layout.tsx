import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  weight: ["300"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const poppins_extrabold = Poppins({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-poppins-extrabold",
});

const poppins_bold = Poppins({
  weight: ["500"],
  subsets: ["latin"],
  variable: "--font-poppins-bold",
});

export const metadata: Metadata = {
  title: "Rediet AI",
  description:
    "Rediet AI - an all in one AI tracker & coach for your health and fitness journey",
  twitter: {
    card: "summary_large_image", // For a large Twitter card
    site: "https://rediet-ai.vercel.app/",
    title: "Rediet AI",
    description:
      "Rediet AI - an all in one AI tracker & coach for your health and fitness journey",
    images: "/opengraph-image.png", // Twitter image
  },
  openGraph: {
    type: "website",
    url: "https://rediet-ai.vercel.app/",
    title: "Rediet AI",
    description:
      "Rediet AI - an all in one AI tracker & coach for your health and fitness journey",
    siteName: "Rediet AI",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Rediet AI Preview",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://rediet-ai.vercel.app/" />
        <meta name="twitter:title" content="Rediet AI" />
        <meta
          name="twitter:description"
          content="Rediet AI - an all in one AI tracker & coach for your health and fitness journey"
        />
        <meta name="twitter:image" content="/opengraph-image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rediet-ai.vercel.app/" />
        <meta property="og:title" content="Rediet AI" />
        <meta
          property="og:description"
          content="Rediet AI - an all in one AI tracker & coach for your health and fitness journey"
        />
        <meta property="og:site_name" content="Rediet AI" />
        <meta property="og:image" content="/opengraph-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Rediet AI Preview" />
      </Head>
      <body
        className={`${poppins.variable} ${poppins_extrabold.variable} ${poppins_bold.variable}`}
      >
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
