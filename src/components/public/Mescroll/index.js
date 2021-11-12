/*
 * @Description:
 * @Author: shufei
 * @Date: 2021-11-08 17:15:19
 * @LastEditTime: 2021-11-08 17:19:21
 * @LastEditors: shufei
 */
import mescroll from './index.vue'
/* istanbul ignore next */
mescroll.install = function (Vue) {
  Vue.component(mescroll.name, mescroll)
}
export default mescroll
