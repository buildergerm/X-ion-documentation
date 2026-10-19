import {
  BookOpen,
  Building2,
  Brain,
  FolderKanban,
  Library,
  MessageSquare,
  Rocket,
  Shield,
  Sparkles,
  Code2,
  Search,
  Users,
  ScrollText,
} from 'lucide-react';

export const sidebarNav = [
  {
    title: 'Platform',
    icon: <Building2 className="h-5 w-5" />,
    defaultOpen: true,
    pages: [
      { title: 'Platform overview', href: '/docs/platform/overview' },
      { title: 'Product directory', href: '/docs/products/overview' },
    ],
  },
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
      { title: 'Introduction', href: '/docs/getting-started/introduction' },
      { title: 'Quick Start', href: '/docs/getting-started/quick-start' },
      { title: 'Sign in & accounts', href: '/docs/getting-started/accounts' },
      { title: 'Troubleshooting', href: '/docs/getting-started/troubleshooting' },
    ],
  },
  {
    title: 'Prompting Scrutium',
    icon: <Sparkles className="h-5 w-5" />,
    defaultOpen: true,
    pages: [
      { title: 'How to prompt Scrutium', href: '/docs/chat/how-to-prompt-scrutium' },
      { title: 'Writing effective prompts', href: '/docs/chat/prompting' },
    ],
  },
  {
    title: 'Chat',
    icon: <MessageSquare className="h-5 w-5" />,
    defaultOpen: true,
    pages: [
      { title: 'Overview', href: '/docs/chat/overview' },
      { title: 'Models & speed', href: '/docs/chat/models' },
      { title: 'Tools & live data', href: '/docs/chat/tools' },
      { title: 'Thinking & activity', href: '/docs/chat/thinking' },
      { title: 'Action prompts', href: '/docs/chat/action-prompts' },
    ],
  },
  {
    title: 'Research & knowledge',
    icon: <Search className="h-5 w-5" />,
    defaultOpen: false,
    pages: [
      { title: 'Research workflows', href: '/docs/research/overview' },
    ],
  },
  {
    title: 'Workspaces & collaboration',
    icon: <Users className="h-5 w-5" />,
    defaultOpen: false,
    pages: [
      { title: 'Workspaces and collaboration', href: '/docs/workspaces/overview' },
    ],
  },
  {
    title: 'Projects & Build',
    icon: <FolderKanban className="h-5 w-5" />,
    defaultOpen: true,
    pages: [
      { title: 'Projects', href: '/docs/projects/overview' },
      { title: 'Build mode', href: '/docs/projects/build-mode' },
    ],
  },
  {
    title: 'Library',
    icon: <Library className="h-5 w-5" />,
    defaultOpen: true,
    pages: [
      { title: 'Your library', href: '/docs/library/overview' },
    ],
  },
  {
    title: 'Memory',
    icon: <Brain className="h-5 w-5" />,
    defaultOpen: true,
    pages: [
      { title: 'How memory works', href: '/docs/memory/overview' },
    ],
  },
  {
    title: 'Account & safety',
    icon: <Shield className="h-5 w-5" />,
    defaultOpen: true,
    pages: [
      { title: 'Age verification', href: '/docs/account/age-verification' },
      { title: 'Parental controls', href: '/docs/account/parental-controls' },
      { title: 'Settings', href: '/docs/account/settings' },
      { title: 'Privacy & data', href: '/docs/account/privacy' },
      { title: 'Account security', href: '/docs/account/security' },
    ],
  },
  {
    title: 'Personalization',
    icon: <Sparkles className="h-5 w-5" />,
    defaultOpen: false,
    pages: [
      { title: 'Preferences', href: '/docs/personalization/preferences' },
    ],
  },
  {
    title: 'Developers',
    icon: <Code2 className="h-5 w-5" />,
    defaultOpen: false,
    pages: [
      { title: 'Self-hosting', href: '/docs/developers/self-hosting' },
      { title: 'Environment variables', href: '/docs/developers/environment' },
      { title: 'Database migrations', href: '/docs/developers/migrations' },
      { title: 'API integration', href: '/docs/developers/api-integration' },
      { title: 'API concepts', href: '/docs/developers/api-concepts' },
      { title: 'Errors & debugging', href: '/docs/developers/errors-and-debugging' },
    ],
  },
  {
    title: 'Resources',
    icon: <ScrollText className="h-5 w-5" />,
    defaultOpen: false,
    pages: [
      { title: 'Product updates', href: '/docs/resources/changelog' },
      { title: 'Policies & documentation scope', href: '/docs/resources/policies-and-terms' },
    ],
  },
  {
    title: 'About',
    icon: <BookOpen className="h-5 w-5" />,
    defaultOpen: false,
    pages: [
      { title: 'X-ion Team', href: '/docs/about/x-ion' },
    ],
  },
];
