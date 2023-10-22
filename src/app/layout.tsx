import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ibukundairo.com"),
  title:
    "Ibukun Dairo | Entrepreneur, Angel Investor, Founder and CEO of Cuesoft",
  description:
    "Ibukun Dairo is the Founder and CEO of Cuesoft, an innovative software company specializing in software engineering and talent management.",
  applicationName: "Ibukun Dairo",
  keywords: [
    "Ibukun",
    "Dairo",
    "Entrepreneur",
    "Angel",
    "Investor",
    "Founder",
    "CEO",
    "Cuesoft"
  ],
  themeColor: "#ecd8c8",
  icons: [
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png", sizes: "180x180" },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-32x32.png",
      sizes: "32x32"
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/android-chrome-192x192.png",
      sizes: "192x192"
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-16x16.png",
      sizes: "16x16"
    },
    {
      rel: "mask-icon",
      url: "/safari-pinned-tab.svg",
      color: "#7b7b7b"
    }
  ],
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    url: "https://ibukundairo.com",
    title:
      "Ibukun Dairo | Entrepreneur, Angel Investor, Founder and CEO of Cuesoft",
    description:
      "Ibukun Dairo is the Founder and CEO of Cuesoft, an innovative software company specializing in software engineering and talent management.",
    siteName: "Ibukun Dairo",
    images: [
      {
        url: "/ibukun-dairo-ceo-cuesoft.jpeg"
      }
    ]
  },
  twitter: {
    site: "@Netlify",
    creator: "@ibukun_o_dairo"
  },
  appleWebApp: {
    title: "Ibukun Dairo"
  },
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="msapplication-TileColor" content="#ecd8c8" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
