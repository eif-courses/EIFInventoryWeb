// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@primevue/nuxt-module', '@sidebase/nuxt-auth'],
  primevue: {
    options: {
      ripple: true,
      inputVariant: 'filled',
      theme: {
        preset: 'Aura',
        options: {
          prefix: 'p',
          darkModeSelector: 'system',
          cssLayer: false
        }
      }
    }
  },
  auth: {
      provider: {
        type: 'authjs',
        trustHost: false,
        defaultProvider: 'credentials',
        addDefaultCallbackUrl: true

    },
    globalAppMiddleware: {
      isEnabled: true
    }
  }
})