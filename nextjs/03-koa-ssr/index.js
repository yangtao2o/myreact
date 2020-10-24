require('@babel/core').transform('code', {
  presets: ['@babel/preset-env'],
})
require('@babel/polyfill')

require('./server.js')
