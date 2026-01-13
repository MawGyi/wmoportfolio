import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";

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
      <body className={`${jetbrainsMono.variable} font-mono antialiased bg-background text-foreground`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
