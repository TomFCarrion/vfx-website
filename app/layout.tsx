import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://magalicarrion.com"),
  title: {
    default: "Magali Carrion - VFX Compositor",
    template: "%s | Magali Carrion",
  },
  description:
    "Experienced VFX compositor specializing in invisible effects for live action productions. Currently seeking opportunities in New Zealand.",
  keywords:
    "VFX compositor, New Zealand jobs, visual effects, film industry, post-production, compositing artist, Nuke, After Effects, invisible effects, film compositing, TV compositing",
  authors: [{ name: "Magali Carrion", url: "https://magalicarrion.com" }],
  creator: "Magali Carrion",
  publisher: "Magali Carrion",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
    locale: "en_US",
    images: [
      {
        url: "/images/maga.webp",
        width: 1200,
        height: 630,
        alt: "Magali Carrion - VFX Compositor",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Magali Carrion - VFX Compositor",
    description:
      "Experienced VFX compositor specializing in invisible effects for live action productions. Currently seeking opportunities in New Zealand.",
    images: [
      {
        url: "/images/maga.webp",
        alt: "Magali Carrion - VFX Compositor",
      },
    ],
    creator: "@magalicarrion",
    site: "@magalicarrion",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1E292C" },
  ],
  category: "portfolio",
  verification: {
    google: "add-your-google-site-verification-here",
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black",
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
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
                    "Nuke",
                    "After Effects",
                    "Digital Compositing",
                    "Color Correction",
                    "Rotoscoping",
                  ],
                  seeks: {
                    "@type": "EmployeeRole",
                    roleName: "VFX Compositor",
                    jobLocation: {
                      "@type": "Country",
                      name: "New Zealand",
                    },
                    availabilityStarts: new Date().toISOString().split("T")[0],
                    employmentType: ["FULL_TIME", "CONTRACTOR"],
                    responsibilities: [
                      "Visual effects compositing",
                      "Digital image manipulation",
                      "Color correction",
                      "Rotoscoping",
                      "Invisible effects",
                    ],
                    skills: [
                      "Nuke",
                      "After Effects",
                      "Digital Compositing",
                      "Color Correction",
                      "Rotoscoping",
                    ],
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
                    width: "1200",
                    height: "630",
                    encodingFormat: "image/webp",
                  },
                  workExample: {
                    "@type": "CreativeWork",
                    name: "VFX Portfolio",
                    description:
                      "Collection of visual effects work for various film and television productions",
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
                  offers: {
                    "@type": "Offer",
                    availability: "https://schema.org/InStock",
                    areaServed: "New Zealand",
                  },
                },
                {
                  "@type": "WebSite",
                  name: "Magali Carrion - VFX",
                  url: "https://magalicarrion.com",
                  description:
                    "Portfolio and professional website of Magali Carrion, VFX Compositor seeking opportunities in New Zealand",
                  author: { "@id": "#person" },
                  inLanguage: "en-US",
                  copyrightYear: new Date().getFullYear(),
                  potentialAction: {
                    "@type": "ContactAction",
                    target: "https://magalicarrion.com/#contact",
                  },
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
