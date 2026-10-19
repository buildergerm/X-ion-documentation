'use client';
import { Github, BookOpen, BrainCircuit, PanelsTopLeft, ArrowUpRight } from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';
import Image from 'next/image';
import { Button } from '@/components/button';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const products = [
  {
    title: 'X-ion Organization',
    eyebrow: 'THE ECOSYSTEM',
    body: 'Explore the organization, product family, shared resources, and how the products fit together.',
    href: '/docs/products/overview',
    icon: BookOpen,
  },
  {
    title: 'Scrutium AI',
    eyebrow: 'AI WORKSPACE',
    body: 'Guides for AI chat, research, Projects, Build mode, Memory, Library, privacy, and developer workflows.',
    href: '/docs/products/scrutium-ai',
    icon: BrainCircuit,
  },
  {
    title: 'Draft',
    eyebrow: 'CAMPAIGNS & INTEGRATIONS',
    body: 'Learn the Draft workflow and how connected publishing, commerce, collaboration, and analytics services fit in.',
    href: '/docs/products/draft',
    icon: PanelsTopLeft,
  },
];

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/90 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/90">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-3 text-sm font-semibold tracking-tight">
            <Image alt="X-ion" src="/logos/logo.png" width={28} height={28} className="object-contain" />
            <span>X-ion Docs</span>
          </div>
          <div className="flex items-center gap-2">
            <ModeToggle />
            <Button onClick={() => window.open('https://github.com/buildergerm/X-ion-documentation', '_blank')}>
              <Github className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex flex-grow flex-col items-center px-4 py-14 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex w-full max-w-5xl flex-col items-center text-center"
        >
          <div className="mb-6 flex items-center gap-3">
            <Image
              alt="X-ion Docs"
              className="h-14 w-14 object-contain"
              width={56}
              height={56}
              src="/logos/logo.png"
              priority
            />
            <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">X-ion Docs</h1>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            One documentation hub for the X-ion Organization product ecosystem — from getting started
            with each product to using features, connecting services, and building with the platform.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button className="px-6 py-3" variant="primary" size="md" onClick={() => router.push('/docs/products/overview')}>
              Explore all products
            </Button>
            <Button className="px-6 py-3" variant="outline" size="md" onClick={() => router.push('/docs/getting-started/introduction')}>
              Browse guides
            </Button>
          </div>

          <div className="mt-14 grid w-full gap-4 text-left md:grid-cols-3">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <button
                  key={product.title}
                  type="button"
                  onClick={() => router.push(product.href)}
                  className="group rounded-2xl border border-gray-200 bg-gray-50 p-5 transition hover:-translate-y-0.5 hover:border-gray-400 hover:bg-white dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-600 dark:hover:bg-gray-900"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-950">
                      <Icon className="h-5 w-5" />
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-gray-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                  <div className="text-xs font-semibold tracking-wider text-gray-500 dark:text-gray-400">{product.eyebrow}</div>
                  <h2 className="mt-2 text-lg font-semibold">{product.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">{product.body}</p>
                </button>
              );
            })}
          </div>

          <div className="mt-8 grid w-full gap-4 text-left sm:grid-cols-2">
            <button
              type="button"
              onClick={() => router.push('/docs/products/draft-integrations')}
              className="flex items-start justify-between gap-4 rounded-2xl border border-gray-200 p-5 text-left transition hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-600"
            >
              <div>
                <h2 className="font-semibold">Integration guides</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">Setup requirements and connection guidance for Draft integrations.</p>
              </div>
              <ArrowUpRight className="mt-1 h-4 w-4 shrink-0" />
            </button>
            <button
              type="button"
              onClick={() => router.push('/docs/developers/environment')}
              className="flex items-start justify-between gap-4 rounded-2xl border border-gray-200 p-5 text-left transition hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-600"
            >
              <div>
                <h2 className="font-semibold">Developer resources</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">Environment configuration, deployment notes, and technical setup.</p>
              </div>
              <ArrowUpRight className="mt-1 h-4 w-4 shrink-0" />
            </button>
          </div>
        </motion.div>
      </main>

      <footer className="border-t border-gray-200 py-4 text-center text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400">
        Official documentation for <strong className="text-gray-800 dark:text-gray-200">X-ion Organization</strong>
      </footer>
    </div>
  );
}
