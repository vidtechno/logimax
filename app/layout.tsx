import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#090e17",
};

export const metadata: Metadata = {
  title: "Logimax.uz — Xalqaro va Amerika Logistikasi Kurslari",
  description:
    "Logimax logistika akademiyasida Xalqaro va Amerika logistikasini nazariya va real amaliyot asosida o‘rganing. Standard va Express kurslar.",
  keywords: [
    "logistika kursi",
    "xalqaro logistika",
    "amerika logistikasi",
    "dispatching kursi",
    "fleet management",
    "Toshkent logistika o'quv markazi",
    "logimax uz"
  ],
  authors: [{ name: "Logimax Logistika Akademiyasi" }],
  openGraph: {
    title: "Logimax.uz — Xalqaro va Amerika Logistikasi Kurslari",
    description:
      "Logimax logistika akademiyasida Xalqaro va Amerika logistikasini nazariya va real amaliyot asosida o‘rganing. Standard va Express kurslar.",
    url: "https://logimax.uz",
    siteName: "Logimax Logistika Akademiyasi",
    locale: "uz_UZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Logimax.uz — Xalqaro va Amerika Logistikasi Kurslari",
    description:
      "Logimax logistika akademiyasida Xalqaro va Amerika logistikasini nazariya va real amaliyot asosida o‘rganing.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className={`${plusJakarta.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#090E17] text-slate-100 antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
