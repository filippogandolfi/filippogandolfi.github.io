// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  site: 'https://filippogandolfi.it',
  integrations: [svelte()],
  image: {
    // iPhone photos come in big — allow quality-focused defaults
    responsiveStyles: true,
  },
});
