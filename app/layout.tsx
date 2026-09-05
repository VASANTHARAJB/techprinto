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
  title: "Technprinto | Turning Ideas Into Technology",
  description: "Digital product studio crafting custom software, mobile apps, and enterprise systems.",
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