import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Magali Carrion - VFX Compositor",
  description:
    "Experienced VFX compositor specializing in invisible effects for live action productions. Currently seeking opportunities in New Zealand.",
  keywords:
    "VFX compositor, New Zealand jobs, visual effects, film industry, post-production, compositing artist",
  authors: [{ name: "Magali Carrion" }],
  creator: "Magali Carrion",
  publisher: "Magali Carrion",
  robots: "index, follow",
  alternates: {
    canonical: "https://magalicarrion.com",
  },
  openGraph: {
    type: "website",
    url: "https://magalicarrion.com",
    title: "Magali Carrion - VFX Compositor",
    description:
      "Experienced VFX compositor specializing in invisible effects for live action productions. Currently seeking opportunities in New Zealand.",
    siteName: "Magali Carrion Portfolio",
    images: [
      {
        url: "/images/maga.webp",
        width: 1200,
        height: 630,
        alt: "Magali Carrion - VFX Compositor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Magali Carrion - VFX Compositor",
    description:
      "Experienced VFX compositor specializing in invisible effects for live action productions. Currently seeking opportunities in New Zealand.",
    images: ["/images/maga.webp"],
    creator: "@magalicarrion",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#1E292C",
  category: "portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <Script
          id="schema-markup"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "#person",
                  name: "Magali Carrion",
                  description:
                    "VFX compositor from Argentina with experience in live action productions, actively seeking opportunities in New Zealand",
                  jobTitle: "VFX Compositor",
                  nationality: "Argentinian",
                  url: "https://magalicarrion.com",
                  sameAs: [
                    "https://linkedin.com/in/magalicarrion",
                    "https://www.imdb.com/es/name/nm12651220",
                  ],
                  knowsAbout: [
                    "Visual Effects",
                    "Compositing",
                    "Post-production",
                  ],
                  seeks: {
                    "@type": "JobPosting",
                    jobLocation: {
                      "@type": "Country",
                      name: "New Zealand",
                    },
                    employmentType: ["FULL_TIME", "CONTRACTOR"],
                    industry: [
                      "Film",
                      "Television",
                      "Visual Effects",
                      "Post-Production",
                    ],
                    occupationalCategory: "Visual Effects Artist",
                  },
                  image: {
                    "@type": "ImageObject",
                    url: "https://magalicarrion.com/images/maga.webp",
                    caption: "Magali Carrion - VFX Compositor",
                  },
                },
                {
                  "@type": "Service",
                  name: "VFX Compositing Services",
                  provider: { "@id": "#person" },
                  description:
                    "Professional VFX compositing services for live action productions, specializing in invisible effects",
                  serviceType: "Visual Effects Compositing",
                  areaServed: {
                    "@type": "Country",
                    name: "New Zealand",
                  },
                },
                {
                  "@type": "WebSite",
                  name: "Magali Carrion - VFX",
                  url: "https://magalicarrion.com",
                  description:
                    "Portfolio and professional website of Magali Carrion, VFX Compositor seeking opportunities in New Zealand",
                  author: { "@id": "#person" },
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
