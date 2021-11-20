/*
 * @Description: 项目入口文件
 * @Author: shufei
 * @Date: 2021-11-04 09:50:04
 * @LastEditTime: 2021-11-18 18:27:26
 * @LastEditors: shufei
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'
import '@/assets/icons'
import '@/components/public'
import '@/api'
import '@/filters'
import '@/directives'
import '@/mixins'
import '@/util'
import '@/core/vant'
import 'vant/lib/index.css'
import '@/assets/css/index.scss'
import 'lib-flexible'
import '@/router/permission' // 路由权限控制
import { Notify } from 'vant'
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: (h) => h(App),
  mounted () {
    window.addEventListener('online', updateOnlineStatus)
    window.addEventListener('offline', updateOnlineStatus)
    function updateOnlineStatus (event) {
      const condition = navigator.onLine ? 'online' : 'offline'
      if (condition === 'online') {
        Notify({ type: 'success', message: '你的网络已连接' })
      } else {
        Notify({ type: 'danger', message: '你的网络已断开' })
      }
    }
  }
}).$mount('#app')
