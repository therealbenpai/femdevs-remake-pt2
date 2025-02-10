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
    defineLocale('es-ES', 'Español (España)'),
    defineLocale('es-MX', 'Español (México)'),
    defineLocale('el-GR', 'Ελληνικά'),
    defineLocale('cs-CZ', 'Čeština'),
    defineLocale('ar', 'العربية', { dir: 'rtl' }),
    defineLocale('he-IL', 'עִברִית', { dir: 'rtl' }),
    defineLocale('yi', 'יידיש', { dir: 'rtl' }),
    defineLocale('fa-IR', 'فارسى', { dir: 'rtl' }),
    defineLocale('ps-PS', 'پښتو', { dir: 'rtl' }),
    defineLocale('ku-IQ', 'کوردی (سۆرانی)', { dir: 'rtl' }),
    defineLocale('ur-PK', 'اُردو', { dir: 'rtl' }),
    defineLocale('da-DK', 'Dansk'),
    defineLocale('fr-FR', 'Français'),
    defineLocale('fi-FL', 'Suomi'),
    defineLocale('hi-IN', 'हिन्दी'),
    defineLocale('hu-HU', 'Magyar'),
    defineLocale('it-IT', 'Italiano'),
    defineLocale('th-TH', 'ไทย'),
    defineLocale('vi-VN', 'Tiếng Việt'),
    defineLocale('id-ID', 'Bahasa Indonesia'),
    defineLocale('ja-JP', '日本語'),
    defineLocale('ko-KR', '한국인'),
    defineLocale('ku-KU', 'Kurdî (Kurmancî)'),
    defineLocale('nb-NO', 'Norsk (Bokmal)'),
    defineLocale('nn-NO', 'Norsk (Nynorsk)'),
    defineLocale('de-DE', 'Deutsch'),
    defineLocale('nl-NL', 'Nederlands'),
    defineLocale('pl-PL', 'Polski'),
    defineLocale('pt-BR', 'Português (Brazil)'),
    defineLocale('pt-PT', 'Português (Portugal)'),
    defineLocale('ro-RO', 'Română'),
    defineLocale('ru-RU', 'Русский'),
    defineLocale('sv-SE', 'Svenska'),
    defineLocale('sk-SK', 'Slovenčina'),
    defineLocale('tr-TR', 'Türkçe'),
    defineLocale('uk-UA', 'українська'),
    defineLocale('zh-CN', '中文（简体)'),
    defineLocale('zh-TW', '中文（繁體)'),
    defineLocale('zh-HK', '中文（香港)'),
]

export { languages }