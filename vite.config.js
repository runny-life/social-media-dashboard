import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: '/social-media-dashboard/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@scripts': path.resolve(__dirname, 'src/scripts'),
    },
  },
  server: {
    open: true,
  },
});
