

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {},
  vueI18nLoader: false,
  locales: [{"code":"ar","iso":"ar-EG","file":"ar.js","dir":"rtl"},{"code":"en","iso":"en-US","file":"en.js","dir":"ltr"}],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: true,
  langDir: "D:\\front-end-nuxt2\\lang\\",
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","onlyOnNoPrefix":false,"onlyOnRoot":false,"useCookie":true},
  differentDomains: false,
  seo: false,
  baseUrl: "https://api.rentup.co",
  vuex: {"moduleName":"i18n","syncLocale":true,"syncMessages":false,"syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  beforeLanguageSwitch: () => null,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  fallbackLocale: "en",
  normalizedLocales: [{"code":"ar","iso":"ar-EG","file":"ar.js","dir":"rtl"},{"code":"en","iso":"en-US","file":"en.js","dir":"ltr"}],
  localeCodes: ["ar","en"],
}

export const localeMessages = {
  'ar.js': () => import('../..\\lang\\ar.js' /* webpackChunkName: "lang-ar.js" */),
  'en.js': () => import('../..\\lang\\en.js' /* webpackChunkName: "lang-en.js" */),
}
