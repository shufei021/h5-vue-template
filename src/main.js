/*
 * @Description: 模板入口文件
 * @Author: shufei
 * @Date: 2021-11-04 09:50:04
 * @LastEditTime: 2021-11-12 22:16:22
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
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: (h) => h(App),
  mounted () {
    window.addEventListener('online', updateOnlineStatus)
    window.addEventListener('offline', updateOnlineStatus)
    function updateOnlineStatus (event) {
      console.log('-----------------Control comes into updateOnlineStatus --------------')
      console.log('event', event)
      var condition = navigator.onLine ? 'online' : 'offline'
      if (condition === 'online') {
        console.log('-----------INternet Is conected ----------------')
        alert('正常工作')
      } else {
        console.log('-----------INternet Is NOOOOOOTT conected ----------------')
        alert('不在线')
      }
    }
  }
}).$mount('#app')
