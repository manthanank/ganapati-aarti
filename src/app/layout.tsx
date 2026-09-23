import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ganapatiaarti.vercel.app';

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
    default: 'श्री गणपति आरती संग्रह | Shree Ganapati Aarti - Lyrics, Transliteration & Meanings | Ganesh Chaturthi',
    template: '%s | Shree Ganapati Aarti',
  },
  description:
    'Complete lyrics, transliteration, and meanings of sacred Ganapati Aartis for Ganesh Chaturthi: Sukh Karta Dukh Harta, Shendur Lal Chadhayo, Jai Ganesh Deva, Ghalin Lotangan, Mantra Pushpanjali, Sankat Nashan Stotram, and Ganapati Atharvashirsha in Devanagari, English, Gujarati, Bengali, and Telugu.',
  keywords: [
    'Ganapati Aarti',
    'श्री गणपति आरती',
    'गणेश आरती लिरिक्स',
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
    'Ganesh Aarti lyrics in Gujarati',
    'Ganesh Aarti lyrics in English',
    'Ganapati Aarti lyrics in Marathi',
    'Ganesh Aarti lyrics in Kannada',
    'ಕನ್ನಡ ಗಣೇಶ ಆರತಿ',
    'Samarth Ramdas Swami Aarti',
  ],
  authors: [{ name: 'Devotees of Lord Ganesha' }],
  creator: 'Devotees of Lord Ganesha',
  publisher: 'Shree Ganapati Aarti Devotion',
  applicationName: 'Shree Ganapati Aarti',
  category: 'Religion, Devotion & Culture',
  alternates: {
    canonical: siteUrl,
    languages: {
      'hi-IN': siteUrl,
      'mr-IN': siteUrl,
      'kn-IN': siteUrl,
      'en-US': siteUrl,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/assets/images/avatar.jpg', sizes: '192x192', type: 'image/jpeg' },
      { url: '/assets/images/avatar.jpg', sizes: '512x512', type: 'image/jpeg' },
    ],
    apple: [
      { url: '/assets/images/avatar.jpg', sizes: '180x180', type: 'image/jpeg' },
    ],
    shortcut: ['/favicon.ico'],
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    title: 'श्री गणपति आरती संग्रह | Shree Ganapati Aarti - Ganesh Chaturthi Special',
    description:
      'Chant complete Ganapati Aartis with multi-script lyrics (Devanagari, English, Gujarati, Bengali, Telugu), hands-free auto-scroll, and authentic temple bell sound.',
    url: siteUrl,
    siteName: 'Shree Ganapati Aarti',
    images: [
      {
        url: `${siteUrl}/assets/images/avatar.jpg`,
        width: 1024,
        height: 1024,
        alt: 'Lord Ganesha (Ganapati Bappa) divine artwork for Ganesh Chaturthi',
      },
      {
        url: `${siteUrl}/assets/images/background.jpg`,
        width: 1920,
        height: 1080,
        alt: 'Lord Ganesha seated majestically during Ganesh Utsav',
      },
    ],
    locale: 'hi_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'श्री गणपति आरती संग्रह | Shree Ganapati Aarti',
    description:
      'Sacred Ganapati Aartis for Ganesh Chaturthi: Sukh Karta Dukh Harta, Shendur Lal Chadhayo, Jai Ganesh Deva with multi-script lyrics and temple bell.',
    images: [`${siteUrl}/assets/images/background.jpg`],
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
        '@type': 'WebSite',
        name: 'Shree Ganapati Aarti',
        url: siteUrl,
        description:
          'A sacred, distraction-free devotional lyrics app for Ganapati Aartis during Ganesh Chaturthi with multi-script support, font zoom, and auto-scroll.',
        inLanguage: ['hi', 'mr', 'sa', 'en', 'gu', 'bn', 'te', 'kn'],
        publisher: {
          '@type': 'Organization',
          name: 'Shree Ganapati Aarti Devotion',
        },
      },
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
          'Complete lyrics, transliteration, and meanings of sacred Ganapati Aartis for Ganesh Chaturthi with temple bell sound and hands-free chant mode.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What are the main Ganapati Aartis chanted during Ganesh Chaturthi?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The traditional sequence chanted during Ganesh Chaturthi includes: 1) Sukhkarta Dukhharta by Samarth Ramdas Swami, 2) Shendur Lal Chadhayo, 3) Jai Ganesh Jai Ganesh Deva, 4) Ghalin Lotangan, 5) Mantra Pushpanjali, 6) Sankat Nashan Ganesh Stotram, and 7) Ganapati Atharvashirsha.',
            },
          },
          {
            '@type': 'Question',
            name: 'Who wrote the famous Ganapati Aarti "Sukh Karta Dukh Harta"?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The revered Aarti "Sukh Karta Dukh Harta" was composed in the 17th century by the great saint-poet Samarth Ramdas Swami at the Mayureshwar temple in Morgaon, Maharashtra.',
            },
          },
          {
            '@type': 'Question',
            name: 'What scripts are supported in this Ganapati Aarti app?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The app supports 5 scripts: Devanagari (Marathi/Hindi/Sanskrit), English Romanized transliteration, Gujarati, Bengali, and Telugu, along with complete verse-by-verse meanings.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the significance of chanting Ganapati Atharvashirsha?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ganapati Atharvashirsha is an ancient Vedic Upanishad from the Atharva Veda that identifies Lord Ganesha as the supreme Brahman, bestowing spiritual peace, intellect, and removing all planetary obstacles.',
            },
          },
        ],
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/assets/images/avatar.jpg" type="image/jpeg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/assets/images/avatar.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
