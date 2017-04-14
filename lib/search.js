const request = require('./utils')

const REGISTRY_URL = 'https://h0dh0qrgeb.execute-api.eu-west-1.amazonaws.com/dev/registry/'

module.exports = function(query, options) {
  options = options || {}
  if (!query) {
    return Promise.reject(new Error('Missing query'))
  }
  return request({
    method: 'GET',
    url: options.registryURL || REGISTRY_URL + '?q=' + encodeURIComponent(query)
  }).then(function (body) {
    return body.items
  })
}
