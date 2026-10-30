import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    target: 'es2022',
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
          matter: ['matter-js'],
          gsap: ['gsap', 'lenis'],
        },
      },
    },
  },
  server: {
    port: 5175,
    open: false,
  },
});

