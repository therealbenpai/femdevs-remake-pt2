// https://nuxt.com/docs/api/configuration/nuxt-config

import { languages } from './configs/languages';
import TailwindsConfig from './configs/tailwinds.config';
import FontConfig from './configs/fonts.config';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
    betterStack: {
      token: process.env.BETTER_STACK_TOKEN,
    },
    spotify: {
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      redirectUri: process.env.SPOTIFY_REDIRECT_URI,
    },
    supabase: {
      url: process.env.SUPABASE_URL,
      key: process.env.SUPABASE_KEY,
      serviceKey: process.env.SUPABASE_SERVICE_KEY,
    },
    oauth: {
      discord: {
        clientId: process.env.DISCORD_CLIENT_ID,
        clientSecret: process.env.DISCORD_CLIENT_SECRET,
      },
    }
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
    'nuxt-auth-utils',
    '@nuxt/ui',
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
  },
  routeRules: {},
  fonts: FontConfig,
  auth: {
    hash: {
      scrypt: {
        blockSize: 1 << 3, // 8
        parallelization: 1,
        saltSize: 1 << 3, // 8
        cost: 1 << 8, // 256
      }
    },
    webAuthn: true
  }
})