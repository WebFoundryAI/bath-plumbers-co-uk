import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://bath-plumbers.co.uk',
  integrations: [
    tailwind(),
  ],
  output: 'static',
  build: {
    format: 'directory',
  },
  trailingSlash: 'always',
});
