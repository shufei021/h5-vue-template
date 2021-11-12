/*
 * @Description: 项目文档说明路由
 * @Author: shufei
 * @Date: 2021-11-12 10:20:46
 * @LastEditTime: 2021-11-12 20:17:08
 * @LastEditors: shufei
 */
export default [
  {
    path: '/doc',
    name: 'doc',
    component: () => import(/* webpackChunkName: "about" */ '@/views/doc'),
    meta: { title: '项目文档说明', keepAlive: false, isTabBar: false }
  },
  {
    path: '/doc/api',
    name: 'api文档说明',
    component: () => import(/* webpackChunkName: "about" */ '@/views/doc/api.vue'),
    meta: { title: 'api', keepAlive: false, isTabBar: false }
  },
  {
    path: '/doc/pic',
    name: 'pic文档说明',
    component: () => import(/* webpackChunkName: "about" */ '@/views/doc/pic.vue'),
    meta: { title: 'svg、img、iconfont文档说明', keepAlive: false, isTabBar: false }
  },
  {
    path: '/doc/components',
    name: 'components文档说明',
    component: () => import(/* webpackChunkName: "about" */ '@/views/doc/components.vue'),
    meta: { title: 'svg、img、iconfont文档说明', keepAlive: false, isTabBar: false }
  },
  {
    path: '/doc/directives',
    name: 'directive文档说明',
    component: () => import(/* webpackChunkName: "about" */ '@/views/doc/directives.vue'),
    meta: { title: 'directive文档说明', keepAlive: false, isTabBar: false }
  }
]
