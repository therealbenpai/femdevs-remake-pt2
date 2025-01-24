import type { LocaleObject } from "@nuxtjs/i18n";

const defineLocale = (code: string, name: string, extra?: Record<keyof LocaleObject<string>, any>): LocaleObject<string> => ({
  code,
  iso: code,
  name,
  file: `./${code}.json`,
  dir: 'ltr',
  ...extra
})

const languages = [
    defineLocale('base', 'Base', { isCatchallLocale: true }),
    defineLocale('en-US', 'English (US)'),
    defineLocale('es-ES', 'Español'),
]

export { languages }