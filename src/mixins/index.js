/*
 * @Description: 项目全局混入
 * @Author: shufei
 * @Date: 2021-11-04 19:47:10
 * @LastEditTime: 2021-11-20 11:33:18
 * @LastEditors: shufei
 */
import Vue from 'vue'
import GLOBAL_MIXINS from './modules/globalMixins'
Vue.mixin(GLOBAL_MIXINS)
export { default as emotionList } from './modules/emotionList'
