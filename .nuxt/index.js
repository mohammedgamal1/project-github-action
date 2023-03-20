import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_bootstrapvue_ae0ec424 from 'nuxt_plugin_bootstrapvue_ae0ec424' // Source: .\\bootstrap-vue.js (mode: 'all')
import nuxt_plugin_pluginutils_fbc614e2 from 'nuxt_plugin_pluginutils_fbc614e2' // Source: .\\nuxt-i18n\\plugin.utils.js (mode: 'all')
import nuxt_plugin_pluginrouting_24b65b1a from 'nuxt_plugin_pluginrouting_24b65b1a' // Source: .\\nuxt-i18n\\plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_0af812d6 from 'nuxt_plugin_pluginmain_0af812d6' // Source: .\\nuxt-i18n\\plugin.main.js (mode: 'all')
import nuxt_plugin_axios_411eeebf from 'nuxt_plugin_axios_411eeebf' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_fontawesome_3c9f127e from 'nuxt_plugin_fontawesome_3c9f127e' // Source: .\\fontawesome.js (mode: 'all')
import nuxt_plugin_datefns_33b75ead from 'nuxt_plugin_datefns_33b75ead' // Source: .\\date-fns.js (mode: 'all')
import nuxt_plugin_cookieuniversalnuxt_558d9f32 from 'nuxt_plugin_cookieuniversalnuxt_558d9f32' // Source: .\\cookie-universal-nuxt.js (mode: 'all')
import nuxt_plugin_nuxtsvgsprite_4d36b1c6 from 'nuxt_plugin_nuxtsvgsprite_4d36b1c6' // Source: .\\nuxt-svg-sprite.js (mode: 'all')
import nuxt_plugin_axios_397e53b5 from 'nuxt_plugin_axios_397e53b5' // Source: ..\\plugins\\axios.js (mode: 'all')
import nuxt_plugin_globalcomponents_a671332a from 'nuxt_plugin_globalcomponents_a671332a' // Source: ..\\plugins\\global-components.js (mode: 'all')
import nuxt_plugin_fontawesome_b8db358e from 'nuxt_plugin_fontawesome_b8db358e' // Source: ..\\plugins\\fontawesome.js (mode: 'all')
import nuxt_plugin_veevalidate_21716614 from 'nuxt_plugin_veevalidate_21716614' // Source: ..\\plugins\\vee-validate.js (mode: 'all')
import nuxt_plugin_filters_14a52510 from 'nuxt_plugin_filters_14a52510' // Source: ..\\plugins\\filters.js (mode: 'all')
import nuxt_plugin_svg4everybody_3a959dc1 from 'nuxt_plugin_svg4everybody_3a959dc1' // Source: ..\\plugins\\svg4everybody.js (mode: 'client')
import nuxt_plugin_vuestarrating_3fe7f99a from 'nuxt_plugin_vuestarrating_3fe7f99a' // Source: ..\\plugins\\vue-star-rating.js (mode: 'client')
import nuxt_plugin_vueselect_9f15b300 from 'nuxt_plugin_vueselect_9f15b300' // Source: ..\\plugins\\vue-select.js (mode: 'client')
import nuxt_plugin_vue2googlemaps_50810e79 from 'nuxt_plugin_vue2googlemaps_50810e79' // Source: ..\\plugins\\vue2-google-maps.js (mode: 'all')
import nuxt_plugin_vuechart_2d0fe5b4 from 'nuxt_plugin_vuechart_2d0fe5b4' // Source: ..\\plugins\\vue-chart.js (mode: 'client')
import nuxt_plugin_vuerangeslider_3ebe782b from 'nuxt_plugin_vuerangeslider_3ebe782b' // Source: ..\\plugins\\vue-range-slider.js (mode: 'client')
import nuxt_plugin_echo_49cfa618 from 'nuxt_plugin_echo_49cfa618' // Source: .\\echo.js (mode: 'client')
import nuxt_plugin_laravelecho_42058a2a from 'nuxt_plugin_laravelecho_42058a2a' // Source: ..\\plugins\\laravel-echo.js (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"Rentup Get the BEST Rent Deals for real estate in Egypt","htmlAttrs":{},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Rentup is a Negotiation & Bidding platform for renting short-term vacation rentals and long-term properties in Egypt"}],"link":[{"rel":"apple-touch-icon","sizes":"76x76","href":"\u002Fimages\u002Ffav-icon\u002Fapple-touch-icon.png"},{"rel":"manifest","href":"\u002Fimages\u002Ffav-icon\u002Fsite.webmanifest"},{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Fimages\u002Ffav-icon\u002Ffavicon.ico"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Inter:wght@400;500;800&display=swap"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Cairo:wght@400;600;800&display=swap"}],"style":[],"script":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_bootstrapvue_ae0ec424 === 'function') {
    await nuxt_plugin_bootstrapvue_ae0ec424(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginutils_fbc614e2 === 'function') {
    await nuxt_plugin_pluginutils_fbc614e2(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_24b65b1a === 'function') {
    await nuxt_plugin_pluginrouting_24b65b1a(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_0af812d6 === 'function') {
    await nuxt_plugin_pluginmain_0af812d6(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_411eeebf === 'function') {
    await nuxt_plugin_axios_411eeebf(app.context, inject)
  }

  if (typeof nuxt_plugin_fontawesome_3c9f127e === 'function') {
    await nuxt_plugin_fontawesome_3c9f127e(app.context, inject)
  }

  if (typeof nuxt_plugin_datefns_33b75ead === 'function') {
    await nuxt_plugin_datefns_33b75ead(app.context, inject)
  }

  if (typeof nuxt_plugin_cookieuniversalnuxt_558d9f32 === 'function') {
    await nuxt_plugin_cookieuniversalnuxt_558d9f32(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxtsvgsprite_4d36b1c6 === 'function') {
    await nuxt_plugin_nuxtsvgsprite_4d36b1c6(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_397e53b5 === 'function') {
    await nuxt_plugin_axios_397e53b5(app.context, inject)
  }

  if (typeof nuxt_plugin_globalcomponents_a671332a === 'function') {
    await nuxt_plugin_globalcomponents_a671332a(app.context, inject)
  }

  if (typeof nuxt_plugin_fontawesome_b8db358e === 'function') {
    await nuxt_plugin_fontawesome_b8db358e(app.context, inject)
  }

  if (typeof nuxt_plugin_veevalidate_21716614 === 'function') {
    await nuxt_plugin_veevalidate_21716614(app.context, inject)
  }

  if (typeof nuxt_plugin_filters_14a52510 === 'function') {
    await nuxt_plugin_filters_14a52510(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_svg4everybody_3a959dc1 === 'function') {
    await nuxt_plugin_svg4everybody_3a959dc1(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuestarrating_3fe7f99a === 'function') {
    await nuxt_plugin_vuestarrating_3fe7f99a(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueselect_9f15b300 === 'function') {
    await nuxt_plugin_vueselect_9f15b300(app.context, inject)
  }

  if (typeof nuxt_plugin_vue2googlemaps_50810e79 === 'function') {
    await nuxt_plugin_vue2googlemaps_50810e79(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuechart_2d0fe5b4 === 'function') {
    await nuxt_plugin_vuechart_2d0fe5b4(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuerangeslider_3ebe782b === 'function') {
    await nuxt_plugin_vuerangeslider_3ebe782b(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_echo_49cfa618 === 'function') {
    await nuxt_plugin_echo_49cfa618(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_laravelecho_42058a2a === 'function') {
    await nuxt_plugin_laravelecho_42058a2a(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
