// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "@/api"
import "@/directives"
Vue.config.productionTip = false
import rdate from 'rdatejs'
import rutils from 'rutilsjs'
Vue.prototype.$date = rdate
Vue.prototype.$utils = rutils
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
