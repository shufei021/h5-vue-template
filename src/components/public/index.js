/*
 * @Author: your name
 * @Date: 2021-11-07 00:07:40
 * @LastEditTime: 2021-11-14 18:19:56
 * @LastEditors: shufei
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \basic-project-template\src\components\public\index.js
 */
import Vue from 'vue'
import PopupLayer from 'vue-popup-layer'
import Mescroll from './Mescroll'
import Empty from './Empty'
import CollapseExpand from './CollapseExpand'
// import SvgIcon from './SvgIcon'
// #https://www.npmjs.com/package/vue-lazyload
import VueLazyload from 'vue-lazyload'
Vue.use(Mescroll)
Vue.use(Empty)
Vue.use(CollapseExpand)
Vue.use(PopupLayer)
// Vue.component('svg-icon', SvgIcon)
Vue.use(VueLazyload, {
  lazyComponent: true,
  preLoad: 1.3,
  error: 'https://img0.baidu.com/it/u=865598530,534584444&fm=26&fmt=auto', // 加载错误的图片
  loading: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F10653986855%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639036873&t=3333a74878eb40c3645b2a2a1a02401a', // 加载时的loading图片
  attempt: 1 // 尝试次数
})

// vue-mescroll
