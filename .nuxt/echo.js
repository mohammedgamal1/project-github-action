import Echo from 'laravel-echo'

window.Pusher = require('pusher-js')

function getHeaders ({ app }) {
  const headers = {}

  if (app.$auth) {
    const strategy = app.$auth.strategy
    const tokenName = strategy.options.tokenName || 'Authorization'
    const token = app.$auth.getToken(strategy.name)

    if (token) {
      headers[tokenName] = token
    }
  }

  return headers
}

export default (ctx, inject) => {
  const options = {"broadcaster":"pusher","authModule":true,"connectOnLogin":true,"disconnectOnLogout":true,"authEndpoint":"https:\u002F\u002Fapi.rentup.co\u002Fapi\u002Fbroadcasting\u002Fauth","host":"https:\u002F\u002Fapi.rentup.co\u002F","key":"7f4615d7f76f19b5e769","cluster":"ap2","encrypted":true,"forceTLS":true}
  options.auth = options.auth || {}
  options.auth.headers = {
    ...options.auth.headers,
    ...getHeaders(ctx)
  }

  const echo = new Echo(options)

  if (ctx.app.$auth) {
    ctx.app.$auth.$storage.watchState('loggedIn', loggedIn => {
      echo.options.auth.headers = {
        ...echo.options.auth.headers,
        ...getHeaders(ctx)
      }

      if (loggedIn) {
        echo.connect()
      }

      if (!loggedIn && echo.connector) {
        echo.disconnect()
      }
    })
  }

  ctx.$echo = echo
  inject('echo', echo)
}
