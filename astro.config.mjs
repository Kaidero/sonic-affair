import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://kaidero.github.io',
  server: {
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  base: '/sonic-affair',
})
