import { useI18n } from 'vue-i18n'
import type { LocaleType } from '@/locales'

export function useLocale() {
  const i18n = useI18n()

  const setLocale = (locale: LocaleType) => {
    i18n.locale.value = locale
    localStorage.setItem('language', locale)
  }

  return {
    locale: i18n.locale,
    t: i18n.t,
    setLocale
  }
}
