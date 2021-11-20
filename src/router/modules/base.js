/*
 * @Description: 基础路由
 * @Author: shufei
 * @Date: 2021-11-11 20:53:50
 * @LastEditTime: 2021-11-19 23:23:39
 * @LastEditors: shufei
 */
export default [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '@/views/home.vue'),
    meta: { title: '主页', keepAlive: false, isTabBar: false }
  },
  {
    path: '/error',
    meta: { title: 'error', keepAlive: false, isTabBar: false },
    component: () => import(/* webpackChunkName: "about" */ '@/views/error.vue')
  }
]
