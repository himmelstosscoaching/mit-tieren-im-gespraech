import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.mit-tieren-im-gespraech.com',
  trailingSlash: 'never',
  build: { format: 'file' },
});
