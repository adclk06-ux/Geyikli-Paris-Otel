import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://geyikliparis.com',
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr']
  }
});
