import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const VUEX_PROPERTIES = ['state', 'getters', 'actions', 'mutations']

let store = {};

(function updateModules () {
  store = normalizeRoot(require('..\\store\\index.js'), 'store/index.js')

  // If store is an exported method = classic mode (deprecated)

  // Enforce store modules
  store.modules = store.modules || {}

  resolveStoreModules(require('..\\store\\UserModule\\index.js'), 'UserModule/index.js')
  resolveStoreModules(require('..\\store\\SearchModule\\index.js'), 'SearchModule/index.js')
  resolveStoreModules(require('..\\store\\PropertyModule\\index.js'), 'PropertyModule/index.js')
  resolveStoreModules(require('..\\store\\MessagingModule\\index.js'), 'MessagingModule/index.js')
  resolveStoreModules(require('..\\store\\HomeModule\\index.js'), 'HomeModule/index.js')
  resolveStoreModules(require('..\\store\\CoreModule\\index.js'), 'CoreModule/index.js')
  resolveStoreModules(require('..\\store\\AuthModule\\index.js'), 'AuthModule/index.js')
  resolveStoreModules(require('..\\store\\AuthModule\\actions.js'), 'AuthModule/actions.js')
  resolveStoreModules(require('..\\store\\AuthModule\\api.js'), 'AuthModule/api.js')
  resolveStoreModules(require('..\\store\\AuthModule\\getters.js'), 'AuthModule/getters.js')
  resolveStoreModules(require('..\\store\\AuthModule\\mutations.js'), 'AuthModule/mutations.js')
  resolveStoreModules(require('..\\store\\AuthModule\\state.js'), 'AuthModule/state.js')
  resolveStoreModules(require('..\\store\\CoreModule\\actions.js'), 'CoreModule/actions.js')
  resolveStoreModules(require('..\\store\\CoreModule\\api.js'), 'CoreModule/api.js')
  resolveStoreModules(require('..\\store\\CoreModule\\getters.js'), 'CoreModule/getters.js')
  resolveStoreModules(require('..\\store\\CoreModule\\mutations.js'), 'CoreModule/mutations.js')
  resolveStoreModules(require('..\\store\\CoreModule\\state.js'), 'CoreModule/state.js')
  resolveStoreModules(require('..\\store\\HomeModule\\actions.js'), 'HomeModule/actions.js')
  resolveStoreModules(require('..\\store\\HomeModule\\api.js'), 'HomeModule/api.js')
  resolveStoreModules(require('..\\store\\HomeModule\\getters.js'), 'HomeModule/getters.js')
  resolveStoreModules(require('..\\store\\HomeModule\\mutations.js'), 'HomeModule/mutations.js')
  resolveStoreModules(require('..\\store\\HomeModule\\state.js'), 'HomeModule/state.js')
  resolveStoreModules(require('..\\store\\MessagingModule\\actions.js'), 'MessagingModule/actions.js')
  resolveStoreModules(require('..\\store\\MessagingModule\\api.js'), 'MessagingModule/api.js')
  resolveStoreModules(require('..\\store\\MessagingModule\\getters.js'), 'MessagingModule/getters.js')
  resolveStoreModules(require('..\\store\\MessagingModule\\mutations.js'), 'MessagingModule/mutations.js')
  resolveStoreModules(require('..\\store\\MessagingModule\\state.js'), 'MessagingModule/state.js')
  resolveStoreModules(require('..\\store\\PropertyModule\\actions.js'), 'PropertyModule/actions.js')
  resolveStoreModules(require('..\\store\\PropertyModule\\api.js'), 'PropertyModule/api.js')
  resolveStoreModules(require('..\\store\\PropertyModule\\getters.js'), 'PropertyModule/getters.js')
  resolveStoreModules(require('..\\store\\PropertyModule\\mutations.js'), 'PropertyModule/mutations.js')
  resolveStoreModules(require('..\\store\\PropertyModule\\state.js'), 'PropertyModule/state.js')
  resolveStoreModules(require('..\\store\\SearchModule\\actions.js'), 'SearchModule/actions.js')
  resolveStoreModules(require('..\\store\\SearchModule\\api.js'), 'SearchModule/api.js')
  resolveStoreModules(require('..\\store\\SearchModule\\getters.js'), 'SearchModule/getters.js')
  resolveStoreModules(require('..\\store\\SearchModule\\mutations.js'), 'SearchModule/mutations.js')
  resolveStoreModules(require('..\\store\\SearchModule\\state.js'), 'SearchModule/state.js')
  resolveStoreModules(require('..\\store\\UserModule\\actions.js'), 'UserModule/actions.js')
  resolveStoreModules(require('..\\store\\UserModule\\api.js'), 'UserModule/api.js')
  resolveStoreModules(require('..\\store\\UserModule\\getters.js'), 'UserModule/getters.js')
  resolveStoreModules(require('..\\store\\UserModule\\mutations.js'), 'UserModule/mutations.js')
  resolveStoreModules(require('..\\store\\UserModule\\state.js'), 'UserModule/state.js')

  // If the environment supports hot reloading...
})()

// createStore
export const createStore = store instanceof Function ? store : () => {
  return new Vuex.Store(Object.assign({
    strict: (process.env.NODE_ENV !== 'production')
  }, store))
}

function normalizeRoot (moduleData, filePath) {
  moduleData = moduleData.default || moduleData

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`)
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData)
  }
  return normalizeModule(moduleData, filePath)
}

function normalizeModule (moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`)

    const state = Object.assign({}, moduleData.state)
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData, { state: () => state })
  }
  return moduleData
}

function resolveStoreModules (moduleData, filename) {
  moduleData = moduleData.default || moduleData
  // Remove store src + extension (./foo/index.js -> foo/index)
  const namespace = filename.replace(/\.(js|mjs)$/, '')
  const namespaces = namespace.split('/')
  let moduleName = namespaces[namespaces.length - 1]
  const filePath = `store/${filename}`

  moduleData = moduleName === 'state'
    ? normalizeState(moduleData, filePath)
    : normalizeModule(moduleData, filePath)

  // If src is a known Vuex property
  if (VUEX_PROPERTIES.includes(moduleName)) {
    const property = moduleName
    const propertyStoreModule = getStoreModule(store, namespaces, { isProperty: true })

    // Replace state since it's a function
    mergeProperty(propertyStoreModule, moduleData, property)
    return
  }

  // If file is foo/index.js, it should be saved as foo
  const isIndexModule = (moduleName === 'index')
  if (isIndexModule) {
    namespaces.pop()
    moduleName = namespaces[namespaces.length - 1]
  }

  const storeModule = getStoreModule(store, namespaces)

  for (const property of VUEX_PROPERTIES) {
    mergeProperty(storeModule, moduleData[property], property)
  }

  if (moduleData.namespaced === false) {
    delete storeModule.namespaced
  }
}

function normalizeState (moduleData, filePath) {
  if (typeof moduleData !== 'function') {
    console.warn(`${filePath} should export a method that returns an object`)
    const state = Object.assign({}, moduleData)
    return () => state
  }
  return normalizeModule(moduleData, filePath)
}

function getStoreModule (storeModule, namespaces, { isProperty = false } = {}) {
  // If ./mutations.js
  if (!namespaces.length || (isProperty && namespaces.length === 1)) {
    return storeModule
  }

  const namespace = namespaces.shift()

  storeModule.modules[namespace] = storeModule.modules[namespace] || {}
  storeModule.modules[namespace].namespaced = true
  storeModule.modules[namespace].modules = storeModule.modules[namespace].modules || {}

  return getStoreModule(storeModule.modules[namespace], namespaces, { isProperty })
}

function mergeProperty (storeModule, moduleData, property) {
  if (!moduleData) {
    return
  }

  if (property === 'state') {
    storeModule.state = moduleData || storeModule.state
  } else {
    storeModule[property] = Object.assign({}, storeModule[property], moduleData)
  }
}
