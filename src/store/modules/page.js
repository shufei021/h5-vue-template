/*
 * @Description:
 * @Author: shufei
 * @Date: 2021-11-08 21:44:08
 * @LastEditTime: 2021-11-08 21:48:50
 * @LastEditors: shufei
 */
/*
 * @Description:
 * @Author: tmh
 * @Date: 2021-03-22 19:42:40
 * @LastEditTime: 2021-03-23 11:12:53
 * @LastEditors: tmh
 */
const state = {
  initLink: '',
  isLoading: null,
  sdkInfo: {}
}
const mutations = {
  setInitLink (state, initLink) {
    state.initLink = initLink
  },
  setLoading (state, isLoading) {
    state.isLoading = isLoading
  },
  setSdkInfo (state, data) {
    state.sdkInfo = data
  }
}
const actions = {
  onLoading (context, isLoading) {
    context.commit('setLoading', isLoading)
  },
  setSdkInfo (context, data) {
    context.commit('setSdkInfo', data)
  }
}
const getters = {}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
