import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pro Meta Ads | Meta Advertising Agency",
  description: "Scale your business with expert Meta ads management. We deliver data-driven campaigns that convert.",
  metadataBase: new URL("https://prometaadsagency.com"),
  openGraph: {
    title: "Pro Meta Ads | Meta Advertising Agency",
    description: "Scale your business with expert Meta ads management. We deliver data-driven campaigns that convert.",
    url: "https://prometaadsagency.com",
    siteName: "Pro Meta Ads",
    images: [
      {
        url: "/testimonial1.jpg",
        width: 1200,
        height: 630,
        alt: "Testimonial Results 1"
      }
    ],
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Pro Meta Ads | Meta Advertising Agency",
    description: "Scale your business with expert Meta ads management. We deliver data-driven campaigns that convert.",
    metadataBase: new URL("https://prometaadsagency.com"),
    openGraph: {
          title: "Pro Meta Ads | Meta Advertising Agency",
          description: "Scale your business with expert Meta ads management. We deliver data-driven campaigns that convert.",
          url: "https://prometaadsagency.com",
          siteName: "Pro Meta Ads",
          images: [
            {
                      url: "/testimonial1.jpg",
                      width: 1200,
                      height: 630,
                      alt: "Testimonial Results 1"
            }
                ],
          locale: "en_US",
          type: "website"
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
          <html
                  lang="en"
                  className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
                >
                <body className="min-h-full flex flex-col">{children}</body>body>
          </html>html>
        );
}</html>
