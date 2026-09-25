import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// Base is "/" for local dev and Vercel. If deploying to GitHub Pages under
// https://<usuario>.github.io/<repositorio>/, change base to "/<repositorio>/".
export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
