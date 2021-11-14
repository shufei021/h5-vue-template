/*
 * @Description: 路由入口
 * @Author: shufei
 * @Date: 2021-11-04 09:50:04
 * @LastEditTime: 2021-11-14 00:20:56
 * @LastEditors: shufei
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import demoPublic from './modules/public'
import baseRoute from './modules/base'
import docRoute from './modules/doc'
Vue.use(VueRouter)
const routes = [
  ...baseRoute,
  ...demoPublic,
  ...docRoute
]

routes.push({
  path: '*',
  redirect: '/error'
})

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
