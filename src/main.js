/*
 * @Description: 模板入口文件
 * @Author: shufei
 * @Date: 2021-11-04 09:50:04
 * @LastEditTime: 2021-11-06 18:43:15
 * @LastEditors: shufei
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/api'
import '@/filters'
import '@/directives'
import '@/mixins'
import '@/util'
import '@/core/vant'
import 'vant/lib/index.css'
import 'lib-flexible'

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
