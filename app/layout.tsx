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
  // 1. Production Base URL for Canonical & OG tags
  metadataBase: new URL("https://techprinto.vercel.app"),

  // 2. SEO Title & Dynamic Template
  title: {
    default: "Technprinto | Turning Ideas Into Technology",
    template: "%s | Technprinto",
  },

  // 3. Meta Description & Keywords
  description:
    "Technprinto is a modern software development studio engineering high-performance websites, cross-platform mobile apps (Flutter), custom ERP, CRM, and cloud DevOps infrastructure.",
  keywords: [
    "website development",
    "custom software development",
    "mobile app development",
    "ERP software",
    "CRM software",
    "e-commerce development",
    "cloud DevOps",
    "Next.js development studio",
    "Technprinto",
  ],
  authors: [{ name: "Technprinto" }],
  creator: "Technprinto",
  publisher: "Technprinto",

  // 4. Canonical URL (Duplicate content prevent panna)
  alternates: {
    canonical: "/",
  },

  // 5. Google Search Console Verification Tag (Screenshot-la irundhadhu)
  verification: {
    // ⚠️ Screenshot-la "COPY" click panni vandha andha full code-ah inga paste pannunga:
    google: "NRmVZE_C-MUF3qult9qS4Na94_7YrLTtdKxLavscKP4", 
  },

  // 6. Social Media Previews (WhatsApp, LinkedIn, Twitter, Facebook)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techprinto.vercel.app",
    siteName: "Technprinto",
    title: "Technprinto | Turning Ideas Into Technology",
    description:
      "Digital product studio crafting custom software, 60 FPS mobile applications, and enterprise systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technprinto | Turning Ideas Into Technology",
    description:
      "Digital product studio crafting custom software, 60 FPS mobile applications, and enterprise systems.",
  },

  // 7. Search Engine Crawlers Directive
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
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
        >
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <ProjectModal />
        </ThemeProvider>
      </body>
    </html>
  );
}