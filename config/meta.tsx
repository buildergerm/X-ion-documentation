const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://scrutium.vercel.app';

export const meta = {
  metadataBase: new URL(siteUrl),
  title: 'X-ion Docs — Official product and developer documentation',
  description:
    'Official documentation for X-ion products, platforms, features, and developer tools.',
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
    title: 'X-ion Docs',
    description:
      'Official product guides and developer documentation from X-ion.',
    images: [
      {
        url: '/og_image.png',
        width: 1200,
        height: 630,
        alt: 'X-ion Docs',
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
    canonical: siteUrl,
  },
  robots: 'index, follow',
};
