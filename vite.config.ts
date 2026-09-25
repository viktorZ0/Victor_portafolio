import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// Base is "/" for local dev and Vercel. El workflow de GitHub Pages
// (.github/workflows/deploy-pages.yml) define GITHUB_PAGES=true al construir,
// para servir el sitio bajo https://<usuario>.github.io/<repositorio>/.
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES === 'true' ? '/Victor_portafolio/' : '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
