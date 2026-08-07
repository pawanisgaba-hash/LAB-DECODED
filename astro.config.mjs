import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';

const srcDir = fileURLToPath(new URL('./src', import.meta.url));

export default defineConfig({
  site: 'https://labdecoded.org',
  markdown: {
    syntaxHighlight: 'shiki'
  },
  vite: {
    resolve: {
      alias: {
        '~': srcDir
      }
    }
  }
});
