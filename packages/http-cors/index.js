const getOrigin = (incomingOrigin, options) => {
  if (options.origins && options.origins.length > 0) {
    if (incomingOrigin && options.origins.includes(incomingOrigin)) {
      return incomingOrigin
    } else {
      return options.origins[0]
    }
  } else {
    if (incomingOrigin && options.credentials && options.origin === '*') {
      return incomingOrigin
    }
    return options.origin
  }
}

const defaults = {
  getOrigin,
  origin: '*',
  headers: null,
  credentials: false
}

const addCorsHeaders = (opts, handler, next) => {
  const options = Object.assign({}, defaults, opts)

  if (handler.event.hasOwnProperty('httpMethod')) {
    handler.response = handler.response || {}
    handler.response.headers = handler.response.headers || {}

    // Check if already setup Access-Control-Allow-Headers
    if (options.headers !== null && !handler.response.headers.hasOwnProperty('Access-Control-Allow-Headers')) {
      handler.response.headers['Access-Control-Allow-Headers'] = options.headers
    }

    // Check if already setup the header Access-Control-Allow-Credentials
    if (handler.response.headers.hasOwnProperty('Access-Control-Allow-Credentials')) {
      options.credentials = JSON.parse(handler.response.headers['Access-Control-Allow-Credentials'])
    }

    if (options.credentials) {
      handler.response.headers['Access-Control-Allow-Credentials'] = String(options.credentials)
    }
    // Check if already setup the header Access-Control-Allow-Origin
    if (!handler.response.headers.hasOwnProperty('Access-Control-Allow-Origin')) {
      const headers = handler.event.headers || {}
      const incomingOrigin = headers['origin'] || headers['Origin']
      handler.response.headers['Access-Control-Allow-Origin'] = options.getOrigin(incomingOrigin, options)
    }
  }

  next(handler.error)
}

module.exports = (opts) => ({
  after: addCorsHeaders.bind(null, opts),
  onError: addCorsHeaders.bind(null, opts)
})
