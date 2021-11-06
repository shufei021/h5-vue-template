/*
 * @Description: 项目全局过滤器
 * @Author: shufei
 * @Date: 2021-11-04 19:31:52
 * @LastEditTime: 2021-11-04 19:39:02
 * @LastEditors: shufei
 */
import Vue from 'vue'
const files = require.context('./modules', false, /\.js$/)
files.keys().forEach(key => {
  const fileName = key.replace(/(\.\/|\.js)/g, '')
  Vue.filter(fileName, files(key).default)
})
