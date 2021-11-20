/*
 * @Description: 公共组件示例
 * @Author: shufei
 * @Date: 2021-11-11 10:27:12
 * @LastEditTime: 2021-11-20 11:45:06
 * @LastEditors: shufei
 */

// 公共组件 示例路由数组
export default [
  {
    path: '/public',
    name: 'public',
    component: () => import(/* webpackChunkName: "about" */ '@/views/public'),
    meta: { title: '公共组件示例', keepAlive: false, isTabBar: false }
  },
  {
    path: '/public/mescroll-demo',
    name: 'mescroll-demo',
    component: () => import(/* webpackChunkName: "about" */ '@/views/public/mescroll-demo.vue'),
    meta: { title: 'mescroll示例', keepAlive: false, isTabBar: false }
  },
  {
    path: '/public/lazyload-demo',
    name: 'lazyload-demo',
    component: () => import(/* webpackChunkName: "about" */ '@/views/public/lazyload-demo.vue'),
    meta: { title: 'v-lazyload示例', keepAlive: false, isTabBar: false }
  },
  {
    path: '/public/popup-layer-demo',
    name: 'popup-layer-demo',
    component: () => import(/* webpackChunkName: "about" */ '@/views/public/popup-layer-demo.vue'),
    meta: { title: 'popup-layer示例', keepAlive: false, isTabBar: false }
  },
  {
    path: '/public/tab-bar-demo',
    name: 'tab-bar-demo',
    component: () => import(/* webpackChunkName: "about" */ '@/views/public/tab-bar-demo.vue'),
    meta: { title: 'tab-bar示例', keepAlive: false, isTabBar: false }
  },
  {
    path: '/public/icon-font-demo',
    name: 'icon-font-demo',
    component: () => import(/* webpackChunkName: "about" */ '@/views/public/icon-font-demo.vue'),
    meta: { title: 'iconfont示例', keepAlive: false, isTabBar: false }
  },
  {
    path: '/public/svg-demo',
    name: 'svg-demo',
    component: () => import(/* webpackChunkName: "about" */ '@/views/public/svg-demo.vue'),
    meta: { title: 'svg示例', keepAlive: false, isTabBar: false }
  },
  {
    path: '/public/image-use-demo',
    name: 'image-use-demo',
    component: () => import(/* webpackChunkName: "about" */ '@/views/public/image-use-demo.vue'),
    meta: { title: 'images示例', keepAlive: false, isTabBar: false }
  },
  {
    path: '/public/component',
    name: 'component',
    component: () => import(/* webpackChunkName: "about" */ '@/views/public/component'),
    meta: { title: '公共组件使用说明', keepAlive: false, isTabBar: false }
  },
  {
    path: '/public/component/empty-demo',
    name: 'empty-demo',
    component: () => import(/* webpackChunkName: "about" */ '@/views/public/component/empty-demo.vue'),
    meta: { title: 'Empty-组件使用示例', keepAlive: false, isTabBar: false }
  },
  {
    path: '/public/draggable-demo',
    name: 'draggable-demo',
    component: () => import(/* webpackChunkName: "about" */ '@/views/public/draggable-demo.vue'),
    meta: { title: 'vuedraggable-组件使用示例', keepAlive: false, isTabBar: false }
  }
]
