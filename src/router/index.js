/*
 * @Description: 路由入口
 * @Author: shufei
 * @Date: 2021-11-04 09:50:04
 * @LastEditTime: 2021-11-17 09:25:41
 * @LastEditors: shufei
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
const files = require.context('./modules', false, /\.js$/)
const routes = files.keys().reduce((p, c) => [...p, ...files(c).default], [])
routes.push({
  path: '*',
  redirect: '/error'
})
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
