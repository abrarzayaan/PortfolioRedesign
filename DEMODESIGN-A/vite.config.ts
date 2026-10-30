import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    target: 'es2022',
    rollupOptions: {
      output: {
        manualChunks: {
          gsap: ['gsap', 'lenis'],
        },
      },
    },
  },
  server: {
    port: 5173,
    open: false,
  },
});
