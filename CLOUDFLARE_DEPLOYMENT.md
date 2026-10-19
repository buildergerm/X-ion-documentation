# Cloudflare Pages deployment

This project uses a Next.js static export and deploys the generated `out/` directory to Cloudflare Pages.

## Cloudflare Pages settings

- **Repository:** `buildergerm/X-ion-documentation`
- **Production branch:** `main`
- **Framework preset:** Next.js (Static HTML Export)
- **Build command:** `pnpm build`
- **Build output directory:** `out`
- **Root directory:** `/`
- **Node.js:** `20.19.0`

## Environment variables

Set `NEXT_PUBLIC_SITE_URL` to the final canonical HTTPS origin before the production build, such as `https://docs.example.com`. Replace that example with the real domain. This variable is used for canonical metadata and the metadata base URL.

No API keys or runtime secrets are needed to build and serve the documentation site.

## Deploy

1. Push changes to `main`.
2. In Cloudflare, go to **Workers & Pages → Create → Pages → Connect to Git**.
3. Select this repository and enter the build settings above.
4. Add `NEXT_PUBLIC_SITE_URL` under the production build environment variables.
5. Deploy and check the homepage, a nested docs page, and the redirects.
6. Add the custom domain in the Pages project's **Custom domains** panel if required.

Git-connected Pages deployments automatically rebuild when new commits reach the configured production branch. A GitHub Actions workflow also checks that dependencies install and the static production build completes.

## Static export notes

- The build produces `out/`.
- MDX pages are generated at build time.
- Next.js image optimization is disabled because it requires a server.
- Next.js middleware is not compatible with static export. The former middleware redirects are represented by `public/_redirects`.
- Do not add API routes, server actions, or request-time rendering without changing the deployment architecture.

## Troubleshooting

- **Build cannot resolve generated Contentlayer modules:** check the build log from the start; the Next.js Contentlayer plugin should generate the content during `pnpm build`.
- **Incorrect canonical URLs:** confirm `NEXT_PUBLIC_SITE_URL` is set to the actual production origin and redeploy.
- **A route returns 404:** verify that the MDX file exists under `docs/`, its link is present in `config/sidebar.tsx` if needed, and the route was generated in `out/`.
- **Redirects do not apply:** verify that `public/_redirects` is included in the deployed `out/` directory.
