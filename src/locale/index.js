import Vue from 'vue'
import VueI18n from 'vue-i18n'
import arSA from './ar_SA'
import enUS from './en_US'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'ar_SA',
  messages: {
    ar_SA: arSA,
    en_US: enUS
  }
})

/**
 * @desc: get local language
 */
export function getLocationLang () {
  const langList = ['en_US', 'ar_SA']
  const hrefLang = window.location.href.match(/lang=(.+?)(&|$)/)
  let url = ''

  if (hrefLang && hrefLang[1] && langList.indexOf(hrefLang[1]) > -1) {
    [, url] = hrefLang
  }

  return url
}

/**
 * @desc: change language
 */
export function changeLanguage (lang, change) {
  i18n.locale = lang
  document.documentElement.lang = lang
  document.documentElement.dir = lang === 'ar_SA' ? 'rtl' : 'ltr'
  if (change) {
    const locationLang = getLocationLang()
    if (locationLang) {
      window.location.href = window.location.href.replace(locationLang, lang)
    } else {
      window.location.reload()
    }
  }
}
