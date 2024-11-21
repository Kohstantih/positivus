import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  base: process.env.NODE_ENV === 'production' ? '/positivus/' : '/',
  resolve: {
    alias: {
      images: 'public/images',
      fonts: 'public/fonts',
    },
  },
});
