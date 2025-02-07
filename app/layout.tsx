import { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const spoqaHanSans = localFont({
  src: '../public/assets/fonts/SpoqaHanSansNeo-Regular.woff',
  variable: '--font-spoqa',
});

export const metadata: Metadata = {
  title: '백건희(han.baek) - Portfolio',
  description: '비즈니스 중심 개발자 백건희입니다.',
  metadataBase: new URL('https://kunhee.info'),
  openGraph: {
    title: '백건희(han.baek) - Portfolio',
    description: '비즈니스 중심 개발자 백건희입니다.',
    url: 'https://kunhee.info',
    siteName: '백건희(han.baek) Portfolio',
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
      <head>
        <meta
          name="google-site-verification"
          content="lVXhm5EZyhKPf8ZMYcZANLu47y2G4WEYYKCxVtEx_pY"
        />
        <meta
          name="naver-site-verification"
          content="f3b509c8e5f76c453633e2794312bbec4f6a01a1"
        />
      </head>
      <body
        className={`${spoqaHanSans.variable} spoqahansans_d39bb874-module__biuP4G__variable`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
