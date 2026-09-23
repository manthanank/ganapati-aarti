import type { Metadata, Viewport } from 'next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ganapati-aarti-five.vercel.app';

export const viewport: Viewport = {
  themeColor: '#0d0705',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'श्री गणपति आरती संग्रह | Shree Ganapati Aarti - Lyrics & Chanting | Ganesh Chaturthi',
    template: '%s | Shree Ganapati Aarti',
  },
  description:
    'Complete lyrics, transliteration, and meanings of sacred Ganapati Aartis for Ganesh Chaturthi: Sukh Karta Dukh Harta, Shendur Lal Chadhayo, Jai Ganesh Deva, Ghalin Lotangan, Mantra Pushpanjali, Sankat Nashan Stotram, and Ganapati Atharvashirsha.',
  keywords: [
    'Ganapati Aarti',
    'श्री गणपति आरती',
    'Ganesh Aarti lyrics',
    'Sukh Karta Dukh Harta lyrics',
    'सुखकर्ता दुःखहर्ता',
    'Shendur Lal Chadhayo lyrics',
    'शेंदूर लाल चढायो',
    'Jai Ganesh Jai Ganesh Deva',
    'जय गणेश देवा',
    'Ghalin Lotangan lyrics',
    'घालीन लोटांगण',
    'Mantra Pushpanjali lyrics',
    'मंत्रपुष्पांजली',
    'Sankat Nashan Ganesh Stotram',
    'संकटनाशन गणेश स्तोत्र',
    'Ganapati Atharvashirsha',
    'श्री गणपती अथर्वशीर्ष',
    'Ganesh Chaturthi Aartis',
    'गणेशोत्सव आरती संग्रह',
    'Ganesh Utsav Prayers',
  ],
  authors: [{ name: 'Devotees of Lord Ganesha' }],
  creator: 'Devotees of Lord Ganesha',
  publisher: 'Shree Ganapati Aarti Devotion',
  applicationName: 'Shree Ganapati Aarti',
  category: 'Religion, Devotion & Culture',
  openGraph: {
    title: 'श्री गणपति आरती संग्रह | Shree Ganapati Aarti - Ganesh Chaturthi Special',
    description:
      'Chant complete Ganapati Aartis with multi-script lyrics (Devanagari, English, Gujarati, Bengali, Telugu), hands-free auto-scroll, and temple bell sound.',
    url: siteUrl,
    siteName: 'Shree Ganapati Aarti',
    images: [
      {
        url: '/assets/images/background.jpg',
        width: 1200,
        height: 630,
        alt: 'Lord Ganesha (Ganapati Bappa) divine artwork for Ganesh Chaturthi',
      },
    ],
    locale: 'hi_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'श्री गणपति आरती संग्रह | Shree Ganapati Aarti',
    description:
      'Sacred Ganapati Aartis for Ganesh Chaturthi: Sukh Karta Dukh Harta, Shendur Lal Chadhayo, Jai Ganesh Deva with multi-script lyrics.',
    images: ['/assets/images/background.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        name: 'Shree Ganapati Aarti Collection',
        applicationCategory: 'ReligiousApplication',
        operatingSystem: 'All',
        url: siteUrl,
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        description:
          'A sacred, distraction-free devotional lyrics app for Ganapati Aartis during Ganesh Chaturthi with multi-script support, font zoom, and auto-scroll.',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Ganapati Aarti Lyrics',
            item: `${siteUrl}/#lyrics`,
          },
        ],
      },
    ],
  };

  return (
    <html lang="hi">
      <head>
        <link rel="icon" href="/assets/images/avatar.jpg" type="image/jpeg" />
        <link rel="shortcut icon" href="/assets/images/avatar.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/assets/images/avatar.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
