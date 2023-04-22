import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.asonicaffair.com',
  server: {
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  base: '/',
})
