/*
 * @Description: 项目全局指令
 * @Author: shufei
 * @Date: 2021-11-04 19:12:29
 * @LastEditTime: 2021-11-04 19:41:17
 * @LastEditors: shufei
 */
import Vue from 'vue'
const files = require.context('./modules', false, /\.js$/)
files.keys().forEach(key => {
  const fileName = key.replace(/(\.\/|\.js)/g, '')
  Vue.directive(fileName, files(key).default)
})
