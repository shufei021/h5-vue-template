/*
 * @Description: 基础路由
 * @Author: shufei
 * @Date: 2021-11-11 20:53:50
 * @LastEditTime: 2021-11-12 23:10:25
 * @LastEditors: shufei
 */
export default [
  {
    path: '/',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/home.vue'),
    meta: { title: '主页', keepAlive: false, isTabBar: false }
  }
]
