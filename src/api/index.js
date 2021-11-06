/*
 * @Author: shufei
 * @Date: 2021-11-02 20:47:05
 * @LastEditTime: 2021-11-04 18:55:22
 * @LastEditors: shufei
 * @Description: api 模块化设置( 提示：该文件禁止修改 )
 */
import Vue from 'vue'
const files = require.context('./modules', true, /\.js$/)
const apis = files.keys().reduce((p, c) => {
  const moduleName = c.slice(2, c.lastIndexOf('/'))
  const moduleNameApi = Object.keys(files(c)).reduce((pre, nxt) => ({ ...pre, [nxt]: files(c)[nxt] }), {})
  p[moduleName] = p[moduleName] ? { ...p[moduleName], ...moduleNameApi } : moduleNameApi
  return p
}, {})
Vue.prototype.$api = apis
