// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  // TODO: change this to your real domain (used for canonical URLs, sitemap, RSS)
  site: 'https://filippogandolfi.dev',
  integrations: [svelte()],
  image: {
    // iPhone photos come in big — allow quality-focused defaults
    responsiveStyles: true,
  },
});
