export default {
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  baseUrl: process.env.NODE_ENV === 'production' ? '/positivus/' : '/',
  resolve: {
    alias: {
      images: 'public/images',
      fonts: 'public/fonts',
    },
  },
};
