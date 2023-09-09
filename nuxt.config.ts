// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  pages: true,
  modules: ['@nuxt/content'],
  content: {
    documentDriven: true,
    experimental: {
      clientDB: true,
      stripQueryParameters: false,
      advanceQuery: false,
    },
  },
  css: ['~/assets/styles/reset.css', '~/assets/styles/global.css'],
});
