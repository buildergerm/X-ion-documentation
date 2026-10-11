export const meta = {
  metadataBase: new URL('https://scrutium.vercel.app'),
  title: 'Scrutium Docs — AI chat, projects, memory & more',
  description:
    'Official documentation for Scrutium AI by X-ion Team. Learn chat, projects, library, memory, safety, and developer setup.',
  authors: [{ name: 'X-ion Team' }],
  keywords: [
    'Scrutium',
    'Scrutium AI',
    'X-ion',
    'AI chat',
    'documentation',
    'memory',
    'projects',
  ],
  publisher: 'X-ion Team',
  creator: 'X-ion Team',
  openGraph: {
    type: 'website',
    title: 'Scrutium Docs',
    description:
      'Official documentation for Scrutium AI — private by default, built by X-ion.',
    images: [
      {
        url: '/og_image.png',
        width: 1200,
        height: 630,
        alt: 'Scrutium Documentation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scrutium Docs',
    description:
      'Official documentation for Scrutium AI — private by default, built by X-ion.',
    images: ['/og_image.png'],
    creator: '@xion',
  },
  alternates: {
    canonical: 'https://scrutium.vercel.app',
  },
  robots: 'index, follow',
  hreflang: {
    en: 'https://scrutium.vercel.app',
  },
};
