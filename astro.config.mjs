import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// @astrojs/sitemap removed — replaced by custom split sitemaps
// See src/pages/sitemap-index.xml.ts, sitemap-pages.xml.ts,
// sitemap-services.xml.ts, sitemap-locations.xml.ts, sitemap-blog.xml.ts

export default defineConfig({
  site: 'https://bath-plumbers.co.uk',
  integrations: [
    tailwind(),
  ],
  output: 'static',
  compressHTML: true,
  build: {
    format: 'directory',
  },
  trailingSlash: 'always',
});
