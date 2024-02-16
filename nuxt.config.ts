export default defineNuxtConfig({
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: 'first' }],
    configPath: 'tailwind.config',
  },
  modules: [
    '@pinia/nuxt',
    'nuxt-security',
    '@nuxtjs/tailwindcss',
    'floating-vue/nuxt',
    'nuxt-icon',
    '@nuxtjs/color-mode',
  ],
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
  },
  security: {
    headers: {
      crossOriginEmbedderPolicy: 'unsafe-none',
      contentSecurityPolicy: {
        'upgrade-insecure-requests': true,
        'media-src': ["'self'"],
        'img-src': ["'self'", 'data:', 'https:', 'blob:'],
      },
      permissionsPolicy: { fullscreen: ['self'] },
    },
    xssValidator: false,
    rateLimiter: false,
  },
  runtimeConfig: {
    API_KEY: process.env.API_KEY,
    API_SECRET: process.env.API_SECRET,
  },
  typescript: {
    typeCheck: 'build',
  },
})
