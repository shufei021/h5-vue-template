/*
 * @Description:
 * @Author: shufei
 * @Date: 2021-11-05 19:05:31
 * @LastEditTime: 2021-11-06 18:32:48
 * @LastEditors: shufei
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    network: true,
  },
  mutations: {
    networkNotify(state, status) {
      state.network = status
    },
  },
  actions: {},
  modules: {},
})
