/*
 * @Description: Tool Library
 * @Author: shufei
 * @Date: 2021-11-04 20:45:42
 * @LastEditTime: 2021-11-08 09:48:01
 * @LastEditors: shufei
 */
import Vue from 'vue'
import utils from 'rutilsjs'
import date from 'rdatejs'
const files = require.context('./modules', true, /\.js$/)
const extend = files.keys().reduce((p, c) => ({ ...p, ...Object.keys(files(c)).reduce((pre, nxt) => ({ ...pre, [nxt]: files(c)[nxt] }), {}) }), {})
Vue.prototype.$utils = {
  ...utils,
  date,
  ...extend // 业务扩展工具方法
}
