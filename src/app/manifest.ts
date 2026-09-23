import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'श्री गणपति आरती संग्रह | Shree Ganapati Aarti Collection',
    short_name: 'गणपति आरती',
    description:
      'Pure, distraction-free devotional reader for Ganapati Aartis during Ganesh Chaturthi with multi-script lyrics and temple bell sound.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0d0705',
    theme_color: '#ff8c00',
    icons: [
      {
        src: '/assets/images/avatar.jpg',
        sizes: '192x192',
        type: 'image/jpeg',
      },
      {
        src: '/assets/images/avatar.jpg',
        sizes: '512x512',
        type: 'image/jpeg',
      },
    ],
  };
}
