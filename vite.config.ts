import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@composables', replacement: '/src/composables' },
      { find: '@', replacement: '/src' },
    ],
  },
  cacheDir: '.yarn',
});
