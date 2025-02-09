import type { LocaleObject } from "@nuxtjs/i18n";
import _ from 'lodash'

const defineLocale = (
    code: string,
    name: string,
    extra?: Record<keyof LocaleObject<string>, any>
): LocaleObject<string> => _.merge({}, ({ code, iso: code, name, file: `./${code}.json` }), extra)

const languages: LocaleObject<string>[] = [
    defineLocale('base', 'Base', { isCatchallLocale: true }),
    defineLocale('en-US', 'English (US)'),
    defineLocale('es-ES', 'Español'),
    defineLocale('ar-EG', 'العربية', { dir: 'ltr' }),
]

export { languages }