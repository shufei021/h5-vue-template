/*
 * @Description:
 * @Author: shufei
 * @Date: 2021-11-10 15:24:37
 * @LastEditTime: 2021-11-11 00:26:15
 * @LastEditors: shufei
 */
import Vue from 'vue'
import SvgIcon from '@/components/public/SvgIcon' // svg组件

// 注册到全局
Vue.component('svg-icon', SvgIcon)
const files = require.context('./svg', false, /\.svg$/)
files.keys().forEach(files)
