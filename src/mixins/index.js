/*
 * @Description: 项目全局混入
 * @Author: shufei
 * @Date: 2021-11-04 19:47:10
 * @LastEditTime: 2021-11-04 20:25:42
 * @LastEditors: shufei
 */
import Vue from 'vue'
import GLOBAL_MIXINS from './modules/globalMixins'
Vue.mixin(GLOBAL_MIXINS)
export { default as emotionList } from './modules/emotionList'
export { default as fieldmap } from './modules/fieldmap'
