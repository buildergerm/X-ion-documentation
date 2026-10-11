'use client';
import { Github } from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';
import Image from 'next/image';
import { Button } from '@/components/button';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/90 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/90">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          <div className="text-sm font-semibold tracking-tight">Scrutium Docs</div>
          <div className="flex items-center gap-2">
            <ModeToggle />
            <Button
              onClick={() =>
                window.open(
                  'https://github.com/buildergerm/scrutium-artificial-Intelligence',
                  '_blank'
                )
              }
            >
              <Github className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex flex-grow flex-col items-center justify-center px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex max-w-3xl flex-col items-center text-center"
        >
          <div className="mb-6 flex items-center gap-3">
            <Image
              alt="Scrutium"
              className="h-14 w-14 dark:invert"
              width={56}
              height={56}
              src="/logos/pinedocs.png"
            />
            <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
              Scrutium
            </h1>
          </div>

          <p className="max-w-xl text-lg text-gray-600 dark:text-gray-300">
            Official docs for Scrutium AI — chat, research, and build with
            privacy by default. Built by X-ion Team.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              className="px-6 py-3"
              variant="primary"
              size="md"
              onClick={() =>
                router.push('/docs/getting-started/introduction')
              }
            >
              Read the docs
            </Button>
            <Button
              className="px-6 py-3"
              variant="outline"
              size="md"
              onClick={() => router.push('/docs/getting-started/quick-start')}
            >
              Quick start
            </Button>
          </div>

          <div className="mt-14 grid w-full gap-4 text-left sm:grid-cols-3">
            {[
              {
                title: 'Chat & tools',
                body: 'Streaming answers, live tools, and a clear thinking UI.',
                href: '/docs/chat/overview',
              },
              {
                title: 'Projects & Build',
                body: 'Organize work and generate apps in Build mode.',
                href: '/docs/projects/overview',
              },
              {
                title: 'Memory',
                body: 'Durable facts across chats — under your control.',
                href: '/docs/memory/overview',
              },
            ].map((card) => (
              <button
                key={card.title}
                type="button"
                onClick={() => router.push(card.href)}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-4 text-left transition hover:border-gray-300 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700"
              >
                <div className="font-medium">{card.title}</div>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  {card.body}
                </p>
              </button>
            ))}
          </div>
        </motion.div>
      </main>

      <footer className="border-t border-gray-200 py-4 text-center text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400">
        Built by <strong className="text-gray-800 dark:text-gray-200">X-ion Team</strong>
      </footer>
    </div>
  );
}
