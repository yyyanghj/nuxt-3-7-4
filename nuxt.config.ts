// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: { preset: 'vercel-edge' },
  devtools: { enabled: true },
  experimental: {
    componentIslands: true
  },
  modules: [
    // '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss'
  ],
  googleFonts: {
    families: {
      'Plus Jakarta Sans': [400]
    }
  },
  tailwindcss: {
    viewer: false
  },
  vue: {
    compilerOptions: {
      isCustomElement: tag => tag === 'calenso-booking'
    }
  }
})
