import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { ErrorBoundary } from "@/components/error-boundary";
import { ScrollProgress } from "@/components/scroll-progress";
import { BackToTop } from "@/components/back-to-top";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Win Maw Oo | Technical Business Analyst",
  description: "Technical Business Analyst and Product Owner bridging business vision and technical execution. 11+ years experience in enterprise solutions, requirements engineering, and digital transformation.",
  keywords: ["business analyst", "product owner", "technical BA", "requirements engineering", "agile", "scrum", "Bangkok", "software engineer", "digital transformation"],
  authors: [{ name: "Win Maw Oo" }],
  creator: "Win Maw Oo",
  metadataBase: new URL('https://winmawoo.com'), // Replace with actual domain
  openGraph: {
    title: "Win Maw Oo | Technical Business Analyst",
    description: "Bridging business vision and technical execution. From building the product right to building the right product.",
    url: 'https://winmawoo.com',
    siteName: 'Win Maw Oo Portfolio',
    images: [
      {
        url: '/og-image.jpg', // Place this file in public/ folder
        width: 1200,
        height: 630,
        alt: 'Win Maw Oo - Technical Business Analyst',
      },
    ],
    locale: 'en_US',
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Win Maw Oo | Technical Business Analyst',
    description: 'Bridging business vision and technical execution.',
    images: ['/og-image.jpg'],
    creator: '@winmawoo', // Update with actual handle if available
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetbrainsMono.variable} relative font-mono antialiased bg-background text-foreground`} suppressHydrationWarning>
        <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
          <div className="hero-astro-bg" />
          <div className="hero-nebula" />
          <div className="hero-starfield" />
        </div>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ErrorBoundary>
            <div className="relative z-10">
              <ScrollProgress />
              <Header />
              {children}
              <BackToTop />
            </div>
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  );
}
