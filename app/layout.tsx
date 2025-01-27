import { Metadata } from 'next'
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
  title: 'Han Baek - Portfolio',
  description: 'Problem Solver Han',
  openGraph: {
    title: 'Han Baek - Portfolio',
    description: 'Problem Solver Han',
    url: 'https://hanbaek-8ocuewx95-myungsangbaeks-projects.vercel.app',
    siteName: 'Han Baek Portfolio',
    images: [
      {
        url: '/assets/images/abstract.jpg',
        width: 1200,
        height: 630,
        alt: 'Portfolio Preview',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
