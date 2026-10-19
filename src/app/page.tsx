'use client';

import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  Code2,
  Compass,
  Layers3,
  MessageSquareText,
  PanelsTopLeft,
  Search,
  ShieldCheck,
  Sparkles,
  Wrench,
} from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';
import Image from 'next/image';
import { Button } from '@/components/button';
import { useRouter } from 'next/navigation';

const primaryLinks = [
  { label: 'Products', href: '/docs/products/overview' },
  { label: 'Guides', href: '/docs/getting-started/introduction' },
  { label: 'Developers', href: '/docs/developers/environment' },
  { label: 'Resources', href: '/docs/getting-started/troubleshooting' },
];

const buildPaths = [
  {
    title: 'Scrutium AI',
    eyebrow: 'AI WORKSPACE',
    description:
      'Learn how to explore ideas, work with AI, organize projects, and make the most of the tools available in Scrutium.',
    href: '/docs/products/scrutium-ai',
    icon: BrainCircuit,
  },
  {
    title: 'Draft',
    eyebrow: 'WORKFLOWS & PUBLISHING',
    description:
      'Explore Draft, understand its workflows, and find guidance for supported integrations and connected services.',
    href: '/docs/products/draft',
    icon: PanelsTopLeft,
  },
  {
    title: 'Developer resources',
    eyebrow: 'BUILD & INTEGRATE',
    description:
      'Find environment setup, integration guidance, configuration notes, and technical documentation for developers.',
    href: '/docs/developers/environment',
    icon: Code2,
  },
];

const learningPaths = [
  {
    title: 'Get started',
    description: 'Start with the essentials and find your way around the X-ion ecosystem.',
    href: '/docs/getting-started/introduction',
    icon: Compass,
  },
  {
    title: 'AI and prompting',
    description: 'Learn practical approaches to asking questions and working with AI tools.',
    href: '/docs/chat/prompting',
    icon: MessageSquareText,
  },
  {
    title: 'Integrations',
    description: 'Review setup requirements and learn how supported services connect.',
    href: '/docs/products/draft-integrations',
    icon: Layers3,
  },
  {
    title: 'Security and privacy',
    description: 'Understand account protection and responsible handling of credentials.',
    href: '/docs/account/security',
    icon: ShieldCheck,
  },
  {
    title: 'Troubleshooting',
    description: 'Find practical steps for diagnosing common setup and product issues.',
    href: '/docs/getting-started/troubleshooting',
    icon: Wrench,
  },
  {
    title: 'Product documentation',
    description: 'Browse product overviews and find the guide relevant to your workflow.',
    href: '/docs/products/overview',
    icon: BookOpen,
  },
  {
    title: 'Research workflows',
    description: 'Plan research, evaluate evidence, and organize findings responsibly.',
    href: '/docs/research/overview',
    icon: Search,
  },
  {
    title: 'Workspaces and collaboration',
    description: 'Organize work clearly and manage access to shared material.',
    href: '/docs/workspaces/overview',
    icon: Layers3,
  },
  {
    title: 'Product updates',
    description: 'Find release notes and changes verified by the X-ion team.',
    href: '/docs/resources/changelog',
    icon: Sparkles,
  },
];

export default function Home() {
  const router = useRouter();

  const navigate = (href: string) => router.push(href);

  return (
    <div className="min-h-screen bg-white text-gray-950 dark:bg-gray-950 dark:text-white">
      <header className="sticky top-0 z-20 border-b border-gray-200/80 bg-white/90 backdrop-blur-xl dark:border-gray-800 dark:bg-gray-950/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-3 sm:px-8">
          <button
            type="button"
            onClick={() => router.push('/')}
            className="flex shrink-0 items-center gap-3 text-left"
            aria-label="X-ion Docs home"
          >
            <Image alt="X-ion" src="/logos/logo.png" width={32} height={32} className="object-contain" />
            <span className="text-base font-semibold tracking-tight">X-ion Docs</span>
          </button>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
            {primaryLinks.map((link) => (
              <button
                type="button"
                key={link.label}
                onClick={() => navigate(link.href)}
                className="text-sm text-gray-600 transition hover:text-gray-950 dark:text-gray-300 dark:hover:text-white"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <ModeToggle />
            <Button onClick={() => navigate('/docs/developers/api-integration')} className="hidden sm:inline-flex">
              API docs <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
            <button
              type="button"
              onClick={() => navigate('/docs/getting-started/introduction')}
              className="rounded-full border border-gray-300 px-3 py-2 text-sm font-medium transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-900 md:hidden"
            >
              Start
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-gray-200 dark:border-gray-800">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(148,163,184,0.16),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(148,163,184,0.10),transparent_60%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:py-28">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 dark:border-gray-800 dark:text-gray-300">
                <Sparkles className="h-3.5 w-3.5" />
                The X-ion documentation hub
              </div>
              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-7xl">
                Everything you need to build, explore, and get more done.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl">
                Find product guides, learn how to use AI-powered tools, connect supported services, and explore technical resources across the X-ion ecosystem.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button className="px-5 py-3" variant="primary" size="md" onClick={() => navigate('/docs/getting-started/introduction')}>
                  Get started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button className="px-5 py-3" variant="outline" size="md" onClick={() => navigate('/docs/products/overview')}>
                  Explore products
                </Button>
              </div>

              <button
                type="button"
                onClick={() => navigate('/docs/getting-started/introduction')}
                className="mt-10 flex w-full max-w-xl items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-left transition hover:border-gray-400 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-600"
              >
                <Search className="h-5 w-5 shrink-0 text-gray-500" />
                <span className="flex-1 text-sm text-gray-500 dark:text-gray-400">Search guides, products, and developer resources</span>
                <span className="hidden rounded-md border border-gray-200 px-2 py-1 text-xs text-gray-500 dark:border-gray-700 sm:inline">Browse</span>
              </button>
            </div>

            <div className="relative mx-auto w-full max-w-xl">
              <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-2xl shadow-gray-200/50 dark:border-gray-800 dark:bg-gray-900 dark:shadow-black/20 sm:p-7">
                <div className="flex items-center justify-between border-b border-gray-100 pb-5 dark:border-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-950 text-white dark:bg-white dark:text-gray-950">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold">Explore the documentation</p>
                      <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">Find your next step</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">X-ion</span>
                </div>
                <div className="mt-3 divide-y divide-gray-100 dark:divide-gray-800">
                  {[
                    { title: 'Start with the basics', description: 'Introduction and setup', href: '/docs/getting-started/introduction', icon: Compass },
                    { title: 'Explore AI workflows', description: 'Scrutium AI and prompting', href: '/docs/chat/prompting', icon: BrainCircuit },
                    { title: 'Build and integrate', description: 'Developer guides and setup', href: '/docs/developers/environment', icon: Code2 },
                    { title: 'Connect your tools', description: 'Draft integrations and services', href: '/docs/products/draft-integrations', icon: Layers3 },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        type="button"
                        key={item.title}
                        onClick={() => navigate(item.href)}
                        className="group flex w-full items-center gap-3 py-4 text-left"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 text-gray-700 dark:border-gray-700 dark:text-gray-200">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-medium">{item.title}</span>
                          <span className="mt-1 block text-xs text-gray-500 dark:text-gray-400">{item.description}</span>
                        </span>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-gray-400 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                    );
                  })}
                </div>
              </div>
              <p className="mt-4 text-center text-xs text-gray-500 dark:text-gray-400">
                Guides for users, teams, and developers across the ecosystem.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">Build paths</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Start with what you want to do.</h2>
              <p className="mt-3 max-w-2xl leading-7 text-gray-600 dark:text-gray-300">
                Explore the products and resources that help you move from an idea to your next step.
              </p>
            </div>
            <button type="button" onClick={() => navigate('/docs/products/overview')} className="inline-flex items-center gap-2 self-start text-sm font-medium hover:underline sm:self-auto">
              View all products <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {buildPaths.map((path) => {
              const Icon = path.icon;
              return (
                <button
                  type="button"
                  key={path.title}
                  onClick={() => navigate(path.href)}
                  className="group flex min-h-64 flex-col rounded-2xl border border-gray-200 p-6 text-left transition hover:-translate-y-1 hover:border-gray-400 hover:shadow-lg hover:shadow-gray-200/40 dark:border-gray-800 dark:hover:border-gray-600 dark:hover:shadow-black/20"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800">
                      <Icon className="h-5 w-5" />
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-gray-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                  <p className="mt-7 text-xs font-semibold tracking-[0.14em] text-gray-500">{path.eyebrow}</p>
                  <h3 className="mt-2 text-xl font-semibold">{path.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">{path.description}</p>
                </button>
              );
            })}
          </div>
        </section>

        <section className="border-y border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900/50">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">Explore and learn</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">The right guide for the work ahead.</h2>
            <p className="mt-3 max-w-2xl leading-7 text-gray-600 dark:text-gray-300">
              From first steps to technical troubleshooting, find clear guidance for common tasks and workflows.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {learningPaths.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    type="button"
                    key={item.title}
                    onClick={() => navigate(item.href)}
                    className="group flex gap-4 rounded-xl border border-gray-200 bg-white p-5 text-left transition hover:border-gray-400 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-600"
                  >
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-gray-500" />
                    <span className="flex-1">
                      <span className="block font-semibold">{item.title}</span>
                      <span className="mt-2 block text-sm leading-6 text-gray-600 dark:text-gray-400">{item.description}</span>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium">Read guide <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" /></span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="flex flex-col justify-between gap-8 rounded-3xl bg-gray-950 p-7 text-white dark:bg-white dark:text-gray-950 sm:p-10 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400 dark:text-gray-500">For developers</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Build with clarity.</h2>
              <p className="mt-4 leading-7 text-gray-300 dark:text-gray-600">
                Explore technical setup, configuration guidance, and integration documentation. API details are documented according to the currently verified platform contract.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button className="px-5 py-3" variant="primary" size="md" onClick={() => navigate('/docs/developers/environment')}>
                Developer guides <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button className="px-5 py-3" variant="outline" size="md" onClick={() => navigate('/docs/developers/api-integration')}>
                API integration
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 text-sm text-gray-500 dark:text-gray-400 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Image alt="X-ion" src="/logos/logo.png" width={24} height={24} className="object-contain" />
            <span>Documentation for the X-ion ecosystem.</span>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <button type="button" onClick={() => navigate('/docs/products/overview')} className="hover:text-gray-950 dark:hover:text-white">Products</button>
            <button type="button" onClick={() => navigate('/docs/developers/environment')} className="hover:text-gray-950 dark:hover:text-white">Developers</button>
            <button type="button" onClick={() => window.open('https://github.com/buildergerm/X-ion-documentation', '_blank', 'noopener,noreferrer')} className="hover:text-gray-950 dark:hover:text-white">GitHub</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
