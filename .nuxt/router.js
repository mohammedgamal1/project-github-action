import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _811459d6 = () => interopDefault(import('..\\pages\\about-us\\index.vue' /* webpackChunkName: "pages/about-us/index" */))
const _670a4973 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _f38defb0 = () => interopDefault(import('..\\pages\\contact-us\\index.vue' /* webpackChunkName: "pages/contact-us/index" */))
const _a5daa496 = () => interopDefault(import('..\\pages\\dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _7a87c12d = () => interopDefault(import('..\\pages\\dashboard\\index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _64ac1f26 = () => interopDefault(import('..\\pages\\dashboard\\conditions.vue' /* webpackChunkName: "pages/dashboard/conditions" */))
const _240717c2 = () => interopDefault(import('..\\pages\\dashboard\\favorite-properties.vue' /* webpackChunkName: "pages/dashboard/favorite-properties" */))
const _1efe4cdf = () => interopDefault(import('..\\pages\\dashboard\\messaging.vue' /* webpackChunkName: "pages/dashboard/messaging" */))
const _c14ea762 = () => interopDefault(import('..\\pages\\dashboard\\my-properties.vue' /* webpackChunkName: "pages/dashboard/my-properties" */))
const _0897ecb6 = () => interopDefault(import('..\\pages\\dashboard\\offers\\index.vue' /* webpackChunkName: "pages/dashboard/offers/index" */))
const _a8929ae4 = () => interopDefault(import('..\\pages\\dashboard\\owner.vue' /* webpackChunkName: "pages/dashboard/owner" */))
const _00d5a8ae = () => interopDefault(import('..\\pages\\dashboard\\requests\\index.vue' /* webpackChunkName: "pages/dashboard/requests/index" */))
const _53e127b8 = () => interopDefault(import('..\\pages\\dashboard\\offers\\_offerId.vue' /* webpackChunkName: "pages/dashboard/offers/_offerId" */))
const _ffd4b384 = () => interopDefault(import('..\\pages\\dashboard\\requests\\_requestId\\index.vue' /* webpackChunkName: "pages/dashboard/requests/_requestId/index" */))
const _5acdb0fe = () => interopDefault(import('..\\pages\\dashboard\\properties\\_propertyId\\edit.vue' /* webpackChunkName: "pages/dashboard/properties/_propertyId/edit" */))
const _40fc30c7 = () => interopDefault(import('..\\pages\\dashboard\\requests\\_requestId\\offers\\index.vue' /* webpackChunkName: "pages/dashboard/requests/_requestId/offers/index" */))
const _321c6273 = () => interopDefault(import('..\\pages\\dashboard\\requests\\_requestId\\offers\\_offerId.vue' /* webpackChunkName: "pages/dashboard/requests/_requestId/offers/_offerId" */))
const _5e7767da = () => interopDefault(import('..\\pages\\delete-my-account\\index.vue' /* webpackChunkName: "pages/delete-my-account/index" */))
const _61a9ff56 = () => interopDefault(import('..\\pages\\marketplace\\index.vue' /* webpackChunkName: "pages/marketplace/index" */))
const _6fac947c = () => interopDefault(import('..\\pages\\privacy-policy\\index.vue' /* webpackChunkName: "pages/privacy-policy/index" */))
const _17e48690 = () => interopDefault(import('..\\pages\\profile\\index.vue' /* webpackChunkName: "pages/profile/index" */))
const _1e442d60 = () => interopDefault(import('..\\pages\\properties\\index.vue' /* webpackChunkName: "pages/properties/index" */))
const _0289164b = () => interopDefault(import('..\\pages\\search\\index.vue' /* webpackChunkName: "pages/search/index" */))
const _4d987694 = () => interopDefault(import('..\\pages\\search-details\\index.vue' /* webpackChunkName: "pages/search-details/index" */))
const _5e29ef3f = () => interopDefault(import('..\\pages\\terms-and-conditions\\index.vue' /* webpackChunkName: "pages/terms-and-conditions/index" */))
const _8e6d1b20 = () => interopDefault(import('..\\pages\\auth\\reset-password.vue' /* webpackChunkName: "pages/auth/reset-password" */))
const _71fb79a2 = () => interopDefault(import('..\\pages\\properties\\add.vue' /* webpackChunkName: "pages/properties/add" */))
const _31736ad2 = () => interopDefault(import('..\\pages\\properties\\add\\1.vue' /* webpackChunkName: "pages/properties/add/1" */))
const _31818253 = () => interopDefault(import('..\\pages\\properties\\add\\2.vue' /* webpackChunkName: "pages/properties/add/2" */))
const _318f99d4 = () => interopDefault(import('..\\pages\\properties\\add\\3.vue' /* webpackChunkName: "pages/properties/add/3" */))
const _319db155 = () => interopDefault(import('..\\pages\\properties\\add\\4.vue' /* webpackChunkName: "pages/properties/add/4" */))
const _31abc8d6 = () => interopDefault(import('..\\pages\\properties\\add\\5.vue' /* webpackChunkName: "pages/properties/add/5" */))
const _31b9e057 = () => interopDefault(import('..\\pages\\properties\\add\\6.vue' /* webpackChunkName: "pages/properties/add/6" */))
const _31c7f7d8 = () => interopDefault(import('..\\pages\\properties\\add\\7.vue' /* webpackChunkName: "pages/properties/add/7" */))
const _851bbb60 = () => interopDefault(import('..\\pages\\properties\\posting.vue' /* webpackChunkName: "pages/properties/posting" */))
const _41bff0ab = () => interopDefault(import('..\\pages\\properties\\thanks.vue' /* webpackChunkName: "pages/properties/thanks" */))
const _7f51120b = () => interopDefault(import('..\\pages\\requests\\post\\destination.vue' /* webpackChunkName: "pages/requests/post/destination" */))
const _19943f45 = () => interopDefault(import('..\\pages\\requests\\post\\preview.vue' /* webpackChunkName: "pages/requests/post/preview" */))
const _2b299c33 = () => interopDefault(import('..\\pages\\requests\\post\\property-category.vue' /* webpackChunkName: "pages/requests/post/property-category" */))
const _29400edb = () => interopDefault(import('..\\pages\\requests\\post\\staying-details.vue' /* webpackChunkName: "pages/requests/post/staying-details" */))
const _1b62ba78 = () => interopDefault(import('..\\pages\\requests\\post\\terms.vue' /* webpackChunkName: "pages/requests/post/terms" */))
const _16ff6644 = () => interopDefault(import('..\\pages\\properties\\parent\\_id.vue' /* webpackChunkName: "pages/properties/parent/_id" */))
const _dd884184 = () => interopDefault(import('..\\pages\\marketplace\\_id.vue' /* webpackChunkName: "pages/marketplace/_id" */))
const _65be07c8 = () => interopDefault(import('..\\pages\\properties\\_id.vue' /* webpackChunkName: "pages/properties/_id" */))
const _8cf7297c = () => interopDefault(import('..\\pages\\rent\\_id.vue' /* webpackChunkName: "pages/rent/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about-us",
    component: _811459d6,
    name: "about-us___en"
  }, {
    path: "/ar",
    component: _670a4973,
    name: "index___ar"
  }, {
    path: "/contact-us",
    component: _f38defb0,
    name: "contact-us___en"
  }, {
    path: "/dashboard",
    component: _a5daa496,
    children: [{
      path: "",
      component: _7a87c12d,
      name: "dashboard___en"
    }, {
      path: "conditions",
      component: _64ac1f26,
      name: "dashboard-conditions___en"
    }, {
      path: "favorite-properties",
      component: _240717c2,
      name: "dashboard-favorite-properties___en"
    }, {
      path: "messaging",
      component: _1efe4cdf,
      name: "dashboard-messaging___en"
    }, {
      path: "my-properties",
      component: _c14ea762,
      name: "dashboard-my-properties___en"
    }, {
      path: "offers",
      component: _0897ecb6,
      name: "dashboard-offers___en"
    }, {
      path: "owner",
      component: _a8929ae4,
      name: "dashboard-owner___en"
    }, {
      path: "requests",
      component: _00d5a8ae,
      name: "dashboard-requests___en"
    }, {
      path: "offers/:offerId",
      component: _53e127b8,
      name: "dashboard-offers-offerId___en"
    }, {
      path: "requests/:requestId",
      component: _ffd4b384,
      name: "dashboard-requests-requestId___en"
    }, {
      path: "properties/:propertyId?/edit",
      component: _5acdb0fe,
      name: "dashboard-properties-propertyId-edit___en"
    }, {
      path: "requests/:requestId/offers",
      component: _40fc30c7,
      name: "dashboard-requests-requestId-offers___en"
    }, {
      path: "requests/:requestId/offers/:offerId",
      component: _321c6273,
      name: "dashboard-requests-requestId-offers-offerId___en"
    }]
  }, {
    path: "/delete-my-account",
    component: _5e7767da,
    name: "delete-my-account___en"
  }, {
    path: "/marketplace",
    component: _61a9ff56,
    name: "marketplace___en"
  }, {
    path: "/privacy-policy",
    component: _6fac947c,
    name: "privacy-policy___en"
  }, {
    path: "/profile",
    component: _17e48690,
    name: "profile___en"
  }, {
    path: "/properties",
    component: _1e442d60,
    name: "properties___en"
  }, {
    path: "/search",
    component: _0289164b,
    name: "search___en"
  }, {
    path: "/search-details",
    component: _4d987694,
    name: "search-details___en"
  }, {
    path: "/terms-and-conditions",
    component: _5e29ef3f,
    name: "terms-and-conditions___en"
  }, {
    path: "/ar/about-us",
    component: _811459d6,
    name: "about-us___ar"
  }, {
    path: "/ar/contact-us",
    component: _f38defb0,
    name: "contact-us___ar"
  }, {
    path: "/ar/dashboard",
    component: _a5daa496,
    children: [{
      path: "",
      component: _7a87c12d,
      name: "dashboard___ar"
    }, {
      path: "conditions",
      component: _64ac1f26,
      name: "dashboard-conditions___ar"
    }, {
      path: "favorite-properties",
      component: _240717c2,
      name: "dashboard-favorite-properties___ar"
    }, {
      path: "messaging",
      component: _1efe4cdf,
      name: "dashboard-messaging___ar"
    }, {
      path: "my-properties",
      component: _c14ea762,
      name: "dashboard-my-properties___ar"
    }, {
      path: "offers",
      component: _0897ecb6,
      name: "dashboard-offers___ar"
    }, {
      path: "owner",
      component: _a8929ae4,
      name: "dashboard-owner___ar"
    }, {
      path: "requests",
      component: _00d5a8ae,
      name: "dashboard-requests___ar"
    }, {
      path: "offers/:offerId",
      component: _53e127b8,
      name: "dashboard-offers-offerId___ar"
    }, {
      path: "requests/:requestId",
      component: _ffd4b384,
      name: "dashboard-requests-requestId___ar"
    }, {
      path: "properties/:propertyId?/edit",
      component: _5acdb0fe,
      name: "dashboard-properties-propertyId-edit___ar"
    }, {
      path: "requests/:requestId/offers",
      component: _40fc30c7,
      name: "dashboard-requests-requestId-offers___ar"
    }, {
      path: "requests/:requestId/offers/:offerId",
      component: _321c6273,
      name: "dashboard-requests-requestId-offers-offerId___ar"
    }]
  }, {
    path: "/ar/delete-my-account",
    component: _5e7767da,
    name: "delete-my-account___ar"
  }, {
    path: "/ar/marketplace",
    component: _61a9ff56,
    name: "marketplace___ar"
  }, {
    path: "/ar/privacy-policy",
    component: _6fac947c,
    name: "privacy-policy___ar"
  }, {
    path: "/ar/profile",
    component: _17e48690,
    name: "profile___ar"
  }, {
    path: "/ar/properties",
    component: _1e442d60,
    name: "properties___ar"
  }, {
    path: "/ar/search",
    component: _0289164b,
    name: "search___ar"
  }, {
    path: "/ar/search-details",
    component: _4d987694,
    name: "search-details___ar"
  }, {
    path: "/ar/terms-and-conditions",
    component: _5e29ef3f,
    name: "terms-and-conditions___ar"
  }, {
    path: "/auth/reset-password",
    component: _8e6d1b20,
    name: "auth-reset-password___en"
  }, {
    path: "/properties/add",
    component: _71fb79a2,
    name: "properties-add___en",
    children: [{
      path: "1",
      component: _31736ad2,
      name: "properties-add-1___en"
    }, {
      path: "2",
      component: _31818253,
      name: "properties-add-2___en"
    }, {
      path: "3",
      component: _318f99d4,
      name: "properties-add-3___en"
    }, {
      path: "4",
      component: _319db155,
      name: "properties-add-4___en"
    }, {
      path: "5",
      component: _31abc8d6,
      name: "properties-add-5___en"
    }, {
      path: "6",
      component: _31b9e057,
      name: "properties-add-6___en"
    }, {
      path: "7",
      component: _31c7f7d8,
      name: "properties-add-7___en"
    }]
  }, {
    path: "/properties/posting",
    component: _851bbb60,
    name: "properties-posting___en"
  }, {
    path: "/properties/thanks",
    component: _41bff0ab,
    name: "properties-thanks___en"
  }, {
    path: "/ar/auth/reset-password",
    component: _8e6d1b20,
    name: "auth-reset-password___ar"
  }, {
    path: "/ar/properties/add",
    component: _71fb79a2,
    name: "properties-add___ar",
    children: [{
      path: "1",
      component: _31736ad2,
      name: "properties-add-1___ar"
    }, {
      path: "2",
      component: _31818253,
      name: "properties-add-2___ar"
    }, {
      path: "3",
      component: _318f99d4,
      name: "properties-add-3___ar"
    }, {
      path: "4",
      component: _319db155,
      name: "properties-add-4___ar"
    }, {
      path: "5",
      component: _31abc8d6,
      name: "properties-add-5___ar"
    }, {
      path: "6",
      component: _31b9e057,
      name: "properties-add-6___ar"
    }, {
      path: "7",
      component: _31c7f7d8,
      name: "properties-add-7___ar"
    }]
  }, {
    path: "/ar/properties/posting",
    component: _851bbb60,
    name: "properties-posting___ar"
  }, {
    path: "/ar/properties/thanks",
    component: _41bff0ab,
    name: "properties-thanks___ar"
  }, {
    path: "/requests/post/destination",
    component: _7f51120b,
    name: "requests-post-destination___en"
  }, {
    path: "/requests/post/preview",
    component: _19943f45,
    name: "requests-post-preview___en"
  }, {
    path: "/requests/post/property-category",
    component: _2b299c33,
    name: "requests-post-property-category___en"
  }, {
    path: "/requests/post/staying-details",
    component: _29400edb,
    name: "requests-post-staying-details___en"
  }, {
    path: "/requests/post/terms",
    component: _1b62ba78,
    name: "requests-post-terms___en"
  }, {
    path: "/ar/requests/post/destination",
    component: _7f51120b,
    name: "requests-post-destination___ar"
  }, {
    path: "/ar/requests/post/preview",
    component: _19943f45,
    name: "requests-post-preview___ar"
  }, {
    path: "/ar/requests/post/property-category",
    component: _2b299c33,
    name: "requests-post-property-category___ar"
  }, {
    path: "/ar/requests/post/staying-details",
    component: _29400edb,
    name: "requests-post-staying-details___ar"
  }, {
    path: "/ar/requests/post/terms",
    component: _1b62ba78,
    name: "requests-post-terms___ar"
  }, {
    path: "/ar/properties/parent/:id?",
    component: _16ff6644,
    name: "properties-parent-id___ar"
  }, {
    path: "/ar/marketplace/:id",
    component: _dd884184,
    name: "marketplace-id___ar"
  }, {
    path: "/ar/properties/:id",
    component: _65be07c8,
    name: "properties-id___ar"
  }, {
    path: "/ar/rent/:id?",
    component: _8cf7297c,
    name: "rent-id___ar"
  }, {
    path: "/properties/parent/:id?",
    component: _16ff6644,
    name: "properties-parent-id___en"
  }, {
    path: "/marketplace/:id",
    component: _dd884184,
    name: "marketplace-id___en"
  }, {
    path: "/properties/:id",
    component: _65be07c8,
    name: "properties-id___en"
  }, {
    path: "/rent/:id?",
    component: _8cf7297c,
    name: "rent-id___en"
  }, {
    path: "/",
    component: _670a4973,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
