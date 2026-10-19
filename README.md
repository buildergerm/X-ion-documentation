# X-ion Organization Documentation

The official documentation hub for products and developer resources from **X-ion**.

This repository contains the source for the X-ion Docs website. It brings product guides, onboarding instructions, feature references, integration setup, troubleshooting, and developer/deployment notes together in one place.

## Products covered

- **X-ion** — organization overview, product ecosystem, and shared guidance.
- **Scrutium AI** — AI chat, research, projects, Build mode, Library, Memory, personalization, account settings, privacy, and developer guidance.
- **Draft** — campaign and content workflow documentation, including supported integration setup for publishing, commerce, collaboration, and analytics services.

Product documentation evolves with each product. Where a provider requires OAuth credentials, API keys, permissions, or product-side configuration, the relevant guide should explain those prerequisites rather than imply that a connection is automatic.

## Explore the documentation

- [Product directory](/docs/products/overview)
- [Scrutium AI](/docs/products/scrutium-ai)
- [Draft](/docs/products/draft)
- [Draft integrations](/docs/products/draft-integrations)
- [Getting started](/docs/getting-started/introduction)
- [Developer documentation](/docs/developers/environment)

## Technology

- Next.js 15 App Router
- MDX and Contentlayer2
- Tailwind CSS 4
- Static export for Cloudflare Pages

## Run locally

### Requirements

- Node.js version supported by the repository's `.node-version`
- pnpm (Corepack is recommended)

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

Open the local URL printed by Next.js.

Documentation content lives in `docs/` as MDX files. Sidebar navigation is configured in `config/sidebar.tsx`, the home page is in `src/app/page.tsx`, and shared SEO metadata is configured in `config/meta.tsx`.

To run a production build locally:

```bash
pnpm build
```

The static export is generated in `out/`.

## Deploy to Cloudflare Pages

This project is configured for static hosting.

1. Connect this GitHub repository to Cloudflare Pages.
2. Set the production branch to `main`.
3. Use the following build settings:

   | Setting | Value |
   | --- | --- |
   | Framework preset | Next.js (Static HTML Export) |
   | Build command | `pnpm build` |
   | Build output directory | `out` |
   | Root directory | `/` |
   | Node.js version | Match `.node-version` and the version supported by the build environment |

4. If a custom domain is configured, set `NEXT_PUBLIC_SITE_URL` to the canonical HTTPS URL for this documentation site.
5. Deploy. New commits to `main` trigger deployments when automatic deployment is enabled.

See [Cloudflare deployment notes](./CLOUDFLARE_DEPLOYMENT.md) for project-specific details. Static export does not support request-time Next.js middleware, API routes, or server actions.

## Contributing documentation

1. Add or edit an MDX file in the appropriate `docs/` section.
2. Include frontmatter with a title, description, and date.
3. Add the page to `config/sidebar.tsx` when it should appear in navigation.
4. Use site paths for internal links and verify that each target exists.
5. Run `pnpm build` before opening a pull request.

Write instructions that are specific, verifiable, and clear about required accounts, permissions, credentials, environment variables, and provider limitations. Never publish secrets, tokens, or private customer information.

## Repository

- **Documentation website source:** [X-ion-documentation](https://github.com/buildergerm/X-ion-documentation)
- **Organization:** [X-ion-KE](https://github.com/X-ion-KE)

---

© X-ion Organization.
