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
    defineLocale('en-GB', 'English (GB)'),
    defineLocale('en-PigLatin', 'Pig Latin'),
    defineLocale('es-ES', 'Español'),
    defineLocale('ar', 'العربية', { dir: 'rtl' }),
    defineLocale('hi-IL', 'עִברִית', { dir: 'rtl' }),
    defineLocale('fa-IR', 'فارسى', { dir: 'rtl' }),
    defineLocale('fr-FR', 'Français'),
    defineLocale('hi-IN', 'हिन्दी'),
    defineLocale('it-IT', 'Italiano'),
    defineLocale('ja-JP', '日本語'),
    defineLocale('ko-KR', '한국인'),
    defineLocale('nb-NO', 'Norsk (Bokmal)'),
    defineLocale('nn-NO', 'Norsk (Nynorsk)'),
    defineLocale('de-DE', 'Deutsch'),
    defineLocale('nl-NL', 'Nederlands'),
    defineLocale('pl-PL', 'Polski'),
    defineLocale('pt-BR', 'Português (Brazil)'),
    defineLocale('ro-RO', 'Română'),
    defineLocale('ru-RU', 'Русский'),
    defineLocale('sv-SE', 'Svenska'),
    defineLocale('tr-TR', 'Türkçe'),
    defineLocale('uk-UA', 'українська'),
    defineLocale('zh-CN', '中文（简体'),
]

export { languages }