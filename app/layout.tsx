import { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const spoqaHanSans = localFont({
  src: '../public/assets/fonts/SpoqaHanSansNeo-Regular.woff',
  variable: '--font-spoqa',
});

export const metadata: Metadata = {
  title: 'Han Baek - Portfolio',
  description: 'Problem Solver Han',
  metadataBase: new URL('https://hanbaek-myungsangbaeks-projects.vercel.app'),
  openGraph: {
    title: 'Han Baek - Portfolio',
    description: 'Problem Solver Han',
    url: 'https://hanbaek-myungsangbaeks-projects.vercel.app',
    siteName: 'Han Baek Portfolio',
    images: [
      {
        url: '/assets/images/debear.jpeg',
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
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body
        className={`${spoqaHanSans.variable} spoqahansans_d39bb874-module__biuP4G__variable`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
