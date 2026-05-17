import type { Metadata } from 'next';
import { Inter, Lora } from 'next/font/google';
import Script from 'next/script';
import { Inspector } from 'react-dev-inspector';
import './globals.css';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { siteConfig } from '@/lib/site';

const GOOGLE_ANALYTICS_ID = 'G-QR5YMPT48K';
const GOOGLE_ADSENSE_ID = 'ca-pub-3383070348689557';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-anthropic-sans',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-anthropic-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - Ultimate Gaming Guides & Wiki`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'game guides',
    'walkthroughs',
    'game wiki',
    'gaming tips',
    'game strategies',
    'video game guides',
    'gaming tutorials',
    'Project Mist guide',
    'Thick As Thieves guide',
    'Coffee Talk Tokyo recipes',
    '007 First Light guide',
  ],
  authors: [{ name: siteConfig.creator }],
  creator: siteConfig.creator,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} - Ultimate Gaming Guides & Wiki`,
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} - Ultimate Gaming Guides & Wiki`,
    description: siteConfig.description,
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
  other: {
    'google-adsense-account': GOOGLE_ADSENSE_ID,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.COZE_PROJECT_ENV === 'DEV';

  return (
    <html lang="en">
      <body className={`${inter.variable} ${lora.variable} min-h-screen flex flex-col antialiased`}>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ANALYTICS_ID}');
          `}
        </Script>
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${GOOGLE_ADSENSE_ID}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {isDev && <Inspector />}
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
