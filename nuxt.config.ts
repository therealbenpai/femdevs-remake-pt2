// https://nuxt.com/docs/api/configuration/nuxt-config

import { languages } from './configs/languages';
import TailwindsConfig from './configs/tailwinds.config';
import FontConfig from './configs/fonts.config';

const caab = (v: any) => Array.isArray(v) && v;

const CD = (domain: string) => Array.of(domain, `*.${domain} `);

class CSPObj {
  none: boolean;
  directives: string[];
  self: boolean;
  wildcard: boolean;
  domains: string[];
  constructor(
    none: boolean,
    directives: string[],
    self: boolean,
    wildcard: boolean,
    domains: string[]
  ) {
    this.none = none;
    this.directives = directives;
    this.self = self;
    this.wildcard = wildcard;
    this.domains = domains;
  }
  parse() {
    if (this.none) return `'none'`;
    return [
      caab(this.directives) ? this.directives.map(v => `'${v}'`) : [],
      this.wildcard ? '*' : '',
      this.self ? "'self'" : '',
      caab(this.domains) ? this.domains : [],
    ].flat(2);
  }
}

class PermissionPolicy {
  none: boolean;
  self: boolean;
  wildcard: boolean;
  src: boolean;
  domains: string[];
  constructor(data: {
    none?: boolean,
    self?: boolean,
    wildcard?: boolean,
    src?: boolean,
    domains?: string[]
  }) {
    this.none = data.none ?? false;
    this.self = data.self ?? false;
    this.wildcard = data.wildcard ?? false;
    this.src = data.src ?? false;
    this.domains = data.domains ?? [];
  }
  parse() {
    if (this.none) return '()';
    if (this.wildcard) return '*';
    return [
      this.src ? 'src' : '',
      this.self ? "self" : '',
      caab(this.domains) ? this.domains : [],
    ].flat(2);
  }
}

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  $production: {
    routeRules: {
      '/*': { isr: true },
      '/api/**': {
        isr: false,
        headers: {
          'Cache-Control': 'no-cache'
        }
      },
      '/profile/ben/blog/**': {
        isr: false,
        ssr: true,
      },
      '/profile/alex/blog/**': {
        isr: false,
        ssr: true,
      }
    },
    content: {
      database: {
        type: 'd1',
        bindingName: 'main',
      },
    }
  },
  $development: {
    tailwindcss: {
      exposeConfig: true,
      viewer: { endpoint: '/_tailwind', exportViewer: true },
    }
  },
  $env: { staging: {} },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxtjs/seo',
    '@nuxt/content',
    'nuxt-auth-utils',
    'nuxt-security'
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
    skipSettingLocaleOnNavigate: true,
  },
  routeRules: {},
  fonts: FontConfig,
  content: {
    preview: {
      api: 'https://api.nuxt.studio',
      dev: true
    },
    renderer: {
      anchorLinks: true,
    },
    watch: {
      enabled: true,
    },
    build: {
      markdown: {
        highlight: {
          theme: 'github-dark',
        }
      }
    }
  },
  security: {
    headers: {
      contentSecurityPolicy: {
        'img-src': new CSPObj(false, [], false, true, [
          'data:', 'blob:',
          [
            'thefemdevs.com', 'google.com',
            'fontawesome.com', 'jsdelivr.net',
            'preline.co', 'accounts.dev',
            'vercel-scripts.com', 'clerk.dev',
            'cloudflare.com', 'cloudflareinsights.com',
            'localhost',
          ].map(CD),
        ].flat(2)).parse(),
        'font-src': new CSPObj(false, [], false, true, []).parse(),
        'media-src': new CSPObj(false, [], false, true, []).parse(),
        'child-src': new CSPObj(false, [], false, true, ['blob:']).parse(),
        'worker-src': new CSPObj(false, [], false, true, ['blob:']).parse(),
        'object-src': new CSPObj(true, [], false, false, []).parse(),
        'default-src': new CSPObj(false, [], false, true, []).parse(),
        'connect-src': new CSPObj(false, [], false, true, []).parse(),
        'form-action': new CSPObj(false, [], false, true, []).parse(),
        'prefetch-src': new CSPObj(false, [], false, true, []).parse(),
        'manifest-src': new CSPObj(false, [], true, false, []).parse(),
        'style-src': new CSPObj(false, ['unsafe-inline'], false, true, []).parse(),
        'base-uri': new CSPObj(false, [], true, false, ['thefemdevs.com']).parse(),
        'script-src': new CSPObj(false, ['unsafe-inline', 'unsafe-eval'], true, false,
          [
            'blob:',
            [
              'thefemdevs.com', 'google.com',
              'fontawesome.com', 'jsdelivr.net',
              'preline.co', 'accounts.dev',
              'vercel-scripts.com', 'clerk.dev',
              'cloudflare.com', 'cloudflareinsights.com',
              'localhost',
            ].map(CD),
          ].flat(2),
        ).parse(),
      },
      permissionsPolicy: {
        'hid': new PermissionPolicy({ none: true }).parse(),
        'usb': new PermissionPolicy({ none: true }).parse(),
        'midi': new PermissionPolicy({ none: true }).parse(),
        'camera': new PermissionPolicy({ none: true }).parse(),
        'serial': new PermissionPolicy({ none: true }).parse(),
        'battery': new PermissionPolicy({ none: true }).parse(),
        'gamepad': new PermissionPolicy({ none: true }).parse(),
        'payment': new PermissionPolicy({ none: true }).parse(),
        'autoplay': new PermissionPolicy({ none: true }).parse(),
        'web-share': new PermissionPolicy({ self: true }).parse(),
        'bluetooth': new PermissionPolicy({ none: true }).parse(),
        'gyroscope': new PermissionPolicy({ none: true }).parse(),
        'fullscreen': new PermissionPolicy({ self: true }).parse(),
        'microphone': new PermissionPolicy({ none: true }).parse(),
        'geolocation': new PermissionPolicy({ none: true }).parse(),
        'magnetometer': new PermissionPolicy({ none: true }).parse(),
        'accelerometer': new PermissionPolicy({ none: true }).parse(),
        'idle-detection': new PermissionPolicy({ none: true }).parse(),
        'storage-access': new PermissionPolicy({ none: true }).parse(),
        'otp-credentials': new PermissionPolicy({ none: true }).parse(),
        'browsing-topics': new PermissionPolicy({ none: true }).parse(),
        'local-fonts': new PermissionPolicy({ wildcard: true }).parse(),
        'screen-wake-lock': new PermissionPolicy({ none: true }).parse(),
        'display-capture': new PermissionPolicy({ none: true }).parse(),
        'document-domain': new PermissionPolicy({ none: true }).parse(),
        'encrypted-media': new PermissionPolicy({ none: true }).parse(),
        'speaker-selection': new PermissionPolicy({ none: true }).parse(),
        'window-management': new PermissionPolicy({ none: true }).parse(),
        'xr-spatial-tracking': new PermissionPolicy({ none: true }).parse(),
        'ambient-light-sensor': new PermissionPolicy({ none: true }).parse(),
        'picture-in-picture': new PermissionPolicy({ wildcard: true }).parse(),
        'identity-credentials-get': new PermissionPolicy({ self: true }).parse(),
        'publickey-credentials-get': new PermissionPolicy({ self: true }).parse(),
        'execution-while-not-rendered': new PermissionPolicy({ none: true }).parse(),
        'publickey-credentials-create': new PermissionPolicy({ self: true }).parse(),
        'execution-while-out-of-viewport': new PermissionPolicy({ none: true }).parse(),
      },
      strictTransportSecurity: {
        includeSubdomains: true,
        preload: true,
        maxAge: 31536e3,
      },
      crossOriginEmbedderPolicy: 'unsafe-none',
      crossOriginResourcePolicy: 'cross-origin',
      crossOriginOpenerPolicy: 'same-origin',
      xContentTypeOptions: 'nosniff',
      xDNSPrefetchControl: 'off',
      xDownloadOptions: 'noopen',
      xFrameOptions: 'DENY',
      xPermittedCrossDomainPolicies: 'none',
      xXSSProtection: '1; mode=block',
      referrerPolicy: 'strict-origin'
    },
    csrf: {
      enabled: true,
      cookie: {
        secure: true,
        sameSite: 'strict',
        httpOnly: true,
      },
    },
    hidePoweredBy: true,
    rateLimiter: {
      interval: 60,
      tokensPerInterval: 300,
      throwError: true,
    },
  },
  runtimeConfig: {
    betterStack: {
      token: process.env.BETTER_STACK_TOKEN,
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
})