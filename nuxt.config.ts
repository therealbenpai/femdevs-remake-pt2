// https://nuxt.com/docs/api/configuration/nuxt-config

import { languages } from './configs/languages';
import TailwindsConfig from './configs/tailwinds.config';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
    BETTER_STACK_TOKEN: process.env.BETTER_STACK_TOKEN,
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
    SPOTIFY_REDIRECT_URI: process.env.SPOTIFY_REDIRECT_URI,

    SUPABASE_KEY: process.env.SUPABASE_KEY,
    SUPABASE_SERVICE_KEY: process.env.SUPABASE_SERVICE_KEY,
  },
  $production: {
    routeRules: {
      '/*': { isr: false }
    },
  },
  $development: {
    tailwindcss: {
      exposeConfig: true,
      viewer: { endpoint: '/_tailwind', exportViewer: true },
    }
  },
  $env: {staging: {}},
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxtjs/seo',
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      titleTemplate: '%s - The FemDevs',
    }
  },
  tailwindcss: {
    config: TailwindsConfig as any
  },
  vite: {
    server: {
      fs: {
        strict: true,
      }
    },
    vue: {
      customElement: true
    },
    vueJsx: {
      mergeProps: true
    }
  },
  typescript: {
    typeCheck: "build",
  },
  i18n: {
    vueI18n: './configs/i18n.config.ts',
    locales: languages,
    defaultLocale: 'en-US',
    strategy: 'prefix_and_default',
  },
  routeRules: {},
})