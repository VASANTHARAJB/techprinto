// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { ProjectModal } from "@/components/project-modal";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata: Metadata = {
  metadataBase: new URL("https://techprinto.vercel.app"),

  title: {
    default: "Techprinto | Software, Web & Mobile App Development Coimbatore",
    template: "%s | Techprinto",
  },
  description:
    "Techprinto is a digital product studio in Coimbatore, Karamadai & Mettupalayam. We develop custom software, high-performance websites, Flutter mobile apps, ERP/CRM systems, and college final year projects across Tamil Nadu.",

  keywords: [
    // Core Services (broad intent)
    "custom software development company",
    "website development company",
    "web application development",
    "mobile app development company",
    "Flutter app development",
    "ERP software development",
    "CRM software development",
    "ERP and CRM development company",
    "final year project development",
    "final year project center",
    "engineering college project ideas",
    "IEEE project development",

    // Local Targeting — Coimbatore
    "software company in Coimbatore",
    "web development company Coimbatore",
    "mobile app developers Coimbatore",
    "final year projects in Coimbatore",
    "IT company near me Coimbatore",

    // Local Targeting — Karamadai
    "software development Karamadai",
    "web design Karamadai",
    "app development Karamadai",

    // Local Targeting — Mettupalayam
    "software company Mettupalayam",
    "web development Mettupalayam",

    // Local Targeting — Veerapandi
    "web design Veerapandi",
    "software developers Veerapandi",

    // Regional / State-level
    "software development company Tamil Nadu",
    "mobile app development company Tamil Nadu",
    "final year project guidance Tamil Nadu",

    // Branded
    "Techprinto",
    "Techprinto Coimbatore",
  ],

  authors: [{ name: "Techprinto" }],
  creator: "Techprinto",
  publisher: "Techprinto",

  alternates: {
    canonical: "/",
  },

  verification: {
    google: "NRmVZE_C-MUF3qult9qS4Na94_7YrLTtdKxLavscKP4",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techprinto.vercel.app",
    siteName: "Techprinto",
    title: "Techprinto | Software, Web & App Development Coimbatore",
    description:
      "Custom software, websites, Flutter apps, ERP/CRM, and final year projects in Coimbatore, Karamadai, Mettupalayam, and Tamil Nadu.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

// Google Local Business & Service Schema (JSON-LD)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Techprinto",
  "image": "https://techprinto.vercel.app/og-image.png",
  "@id": "https://techprinto.vercel.app",
  "url": "https://techprinto.vercel.app",
  "telephone": "+91-9789501854", // ⚠️ Unga actual WhatsApp / calling phone number inga update pannunga
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Karamadai / Veerapandi",
    "addressLocality": "Coimbatore",
    "addressRegion": "Tamil Nadu",
    "postalCode": "641104",
    "addressCountry": "IN",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 11.2427,
    "longitude": 76.9587,
  },
  "areaServed": [
    { "@type": "City", "name": "Karamadai" },
    { "@type": "City", "name": "Mettupalayam" },
    { "@type": "City", "name": "Veerapandi" },
    { "@type": "City", "name": "Coimbatore" },
    { "@type": "AdministrativeArea", "name": "Tamil Nadu" },
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Software Engineering Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Software Development",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Website & Web Application Creation",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile Application Development (iOS & Android)",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Enterprise ERP & CRM Architecture",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "College Final Year Project Guidance & Development",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${sora.variable} antialiased bg-[#07090E] text-white selection:bg-[#FF5E3A] selection:text-white`}
      >
        {/* JSON-LD for Search Engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
        >
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <ProjectModal />
        </ThemeProvider>
      </body>
    </html>
  );
}