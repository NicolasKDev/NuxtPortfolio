// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    '@nuxt/eslint',
  ],
  components: [
    { path: '~/components', pathPrefix: false },
    { path: '~/components/Sections', pathPrefix: true, prefix: 'Sections' },
  ],
  css: ['~/assets/css/tailwind.css'],
  ui: {
    colorMode: true,
  },
  ssr: true,
})
