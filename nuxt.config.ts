// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  modules: [
    '@nuxtjs/color-mode', 
    '@nuxtjs/tailwindcss'
  ],
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'dark',
  },
  css: ['/assets/styles/main.scss']
});
