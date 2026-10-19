import {
  BookOpen,
  Building2,
  Brain,
  FolderKanban,
  Library,
  MessageSquare,
  Rocket,
  Settings,
  Shield,
  Sparkles,
  Code2,
} from 'lucide-react';

export const sidebarNav = [
  {
    title: 'X-ion Products',
    icon: <Building2 className="h-5 w-5" />,
    defaultOpen: true,
    pages: [
      { title: 'Product directory', href: '/docs/products/overview' },
      { title: 'Scrutium AI', href: '/docs/products/scrutium-ai' },
      { title: 'Draft', href: '/docs/products/draft' },
      { title: 'Draft integrations', href: '/docs/products/draft-integrations' },
    ],
  },
  {
    title: 'Getting Started',
    icon: <Rocket className="h-5 w-5" />,
    defaultOpen: true,
    pages: [
      {
        title: 'Introduction',
        href: '/docs/getting-started/introduction',
      },
      {
        title: 'Quick Start',
        href: '/docs/getting-started/quick-start',
      },
      {
        title: 'Sign in & accounts',
        href: '/docs/getting-started/accounts',
      },
    ],
  },
  {
    title: 'Chat',
    icon: <MessageSquare className="h-5 w-5" />,
    defaultOpen: true,
    pages: [
      {
        title: 'Overview',
        href: '/docs/chat/overview',
      },
      {
        title: 'Models & speed',
        href: '/docs/chat/models',
      },
      {
        title: 'Tools & live data',
        href: '/docs/chat/tools',
      },
      {
        title: 'Thinking & activity',
        href: '/docs/chat/thinking',
      },
      {
        title: 'Action prompts',
        href: '/docs/chat/action-prompts',
      },
    ],
  },
  {
    title: 'Projects & Build',
    icon: <FolderKanban className="h-5 w-5" />,
    defaultOpen: true,
    pages: [
      {
        title: 'Projects',
        href: '/docs/projects/overview',
      },
      {
        title: 'Build mode',
        href: '/docs/projects/build-mode',
      },
    ],
  },
  {
    title: 'Library',
    icon: <Library className="h-5 w-5" />,
    defaultOpen: true,
    pages: [
      {
        title: 'Your library',
        href: '/docs/library/overview',
      },
    ],
  },
  {
    title: 'Memory',
    icon: <Brain className="h-5 w-5" />,
    defaultOpen: true,
    pages: [
      {
        title: 'How memory works',
        href: '/docs/memory/overview',
      },
    ],
  },
  {
    title: 'Account & safety',
    icon: <Shield className="h-5 w-5" />,
    defaultOpen: true,
    pages: [
      {
        title: 'Age verification',
        href: '/docs/account/age-verification',
      },
      {
        title: 'Parental controls',
        href: '/docs/account/parental-controls',
      },
      {
        title: 'Settings',
        href: '/docs/account/settings',
      },
      {
        title: 'Privacy & data',
        href: '/docs/account/privacy',
      },
    ],
  },
  {
    title: 'Personalization',
    icon: <Sparkles className="h-5 w-5" />,
    defaultOpen: false,
    pages: [
      {
        title: 'Preferences',
        href: '/docs/personalization/preferences',
      },
    ],
  },
  {
    title: 'Developers',
    icon: <Code2 className="h-5 w-5" />,
    defaultOpen: false,
    pages: [
      {
        title: 'Self-hosting',
        href: '/docs/developers/self-hosting',
      },
      {
        title: 'Environment variables',
        href: '/docs/developers/environment',
      },
      {
        title: 'Database migrations',
        href: '/docs/developers/migrations',
      },
    ],
  },
  {
    title: 'About',
    icon: <BookOpen className="h-5 w-5" />,
    defaultOpen: false,
    pages: [
      {
        title: 'X-ion Team',
        href: '/docs/about/x-ion',
      },
    ],
  },
];
