// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  pages: true,
  modules: ['@nuxt/content'],
  content: {
    documentDriven: true,
  },
});
