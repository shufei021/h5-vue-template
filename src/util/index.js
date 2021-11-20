/*
 * @Description: Tool Library
 * @Author: shufei
 * @Date: 2021-11-04 20:45:42
 * @LastEditTime: 2021-11-19 23:31:52
 * @LastEditors: shufei
 */
import Vue from 'vue'
import date from 'rdatejs'
import utils from 'rutilsjs'

const files = require.context('./modules', true, /\.js$/)
const extend = files.keys().reduce((p, c) => ({ ...p, ...Object.keys(files(c)).reduce((pre, nxt) => ({ ...pre, [nxt]: files(c)[nxt] }), {}) }), {})
Vue.prototype.$utils = {
  date,
  ...utils,
  ...extend // 业务扩展工具方法
}
Object.defineProperty(window, 'util', {
  get (val) {
    return Vue.prototype.$utils
  }
})
