/*
 * @Author: shufei
 * @Date: 2021-11-07 00:07:40
 * @LastEditTime: 2021-11-18 18:44:49
 * @LastEditors: shufei
 * @Description: 全局注册组件
 */
import Vue from 'vue'
import PopupLayer from 'vue-popup-layer'
import Mescroll from './Mescroll'
import Empty from './Empty'
import VueLazyload from 'vue-lazyload'// #https://www.npmjs.com/package/vue-lazyload
Vue.use(Mescroll) // 下拉刷新、上拉加载更多组件
Vue.use(Empty) // 缺省页组件
Vue.use(PopupLayer) // 无限弹出层组件
Vue.use(VueLazyload, {
  error: 'https://img0.baidu.com/it/u=4116432480,1847603338&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=284', // 加载错误的图片
  loading: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F10653986855%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639036873&t=3333a74878eb40c3645b2a2a1a02401a', // 加载时的loading图片
  attempt: 1 // 尝试次数
})
