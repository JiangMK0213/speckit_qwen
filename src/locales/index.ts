import { createI18n, type I18n } from 'vue-i18n'
import zh from './zh.ts'
import en from './en.ts'
import elementEnLocale from 'element-plus/es/locale/lang/en'
import elementZhLocale from 'element-plus/es/locale/lang/zh-cn'

export type LocaleType = 'zh' | 'en'

type LocaleConfig = {
  label: string
  value: LocaleType
}

export const localeMap: Record<LocaleType, LocaleConfig> = {
  zh: {
    label: '简体中文',
    value: 'zh'
  },
  en: {
    label: 'English',
    value: 'en'
  }
}

const messages = {
  zh: {
    ...zh,
    el: elementZhLocale // Element Plus 的语言配置
  },
  en: {
    ...en,
    el: elementEnLocale // Element Plus 的语言配置
  }
}

const i18n: I18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('language') || 'zh',
  fallbackLocale: 'zh',
  messages
})

export const t = i18n.global.t

export default i18n
