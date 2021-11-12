/*
 * @Description: vuex 自动化
 * @Author: shufei
 * @Date: 2021-11-08 20:59:24
 * @LastEditTime: 2021-11-11 20:27:54
 * @LastEditors: shufei
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const files = require.context('./modules', false, /\.js$/)
const modules = files.keys().reduce((p, c) => ({ ...p, [c.replace(/(\.\/|\.js)/g, '')]: files(c).default }), {})
export default new Vuex.Store({
  modules,
  state: {
    direction: 'forward' // 页面切换方向
  },
  getters: {
    initLink: state => state.page.initLink,
    isLoading: state => state.page.isLoading,
    sdkInfo: state => state.page.sdkInfo,
    userData (state, getters) {
      return state.user.user
      // return getters['user/user']
    }
    // vuex 全局getters引入局部
    // token () {
    //   return store.getters['user/token']
    // }
  },
  mutations: {
    // 更新页面切换方向
    updateDirection (state, direction) {
      state.direction = direction
    }
  },
  actions: {

  }
})
