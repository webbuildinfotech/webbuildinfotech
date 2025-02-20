import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
// import sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    tailwindcss(),
<<<<<<< HEAD
    // sitemap({
      // hostname: 'https://webbuildinfotech.com',
      // changefreq: 'daily',
    // }),
=======
    sitemap({
      hostname: 'https://webbuildinfotech.com',
      changefreq: 'daily',
      priority: 0.8,
      lastmod: new Date().toISOString(),
      exclude: ['/404', '/private/*'],
    }),
>>>>>>> a9caa68f60cf53e895a3464df9e26a6deaa6d835
  ],
})