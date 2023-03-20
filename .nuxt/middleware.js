const middleware = {}

middleware['require-auth'] = require('..\\middleware\\require-auth.js')
middleware['require-auth'] = middleware['require-auth'].default || middleware['require-auth']

middleware['visitors-only'] = require('..\\middleware\\visitors-only.js')
middleware['visitors-only'] = middleware['visitors-only'].default || middleware['visitors-only']

export default middleware
