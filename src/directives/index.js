import Vue from 'vue'
const files = require.context('./modules', false, /\.js$/)
files.keys().forEach(key => {
  const fileName = key.replace(/(\.\/|\.js)/g, '')
  Vue.directive(fileName, files(key).default)
})