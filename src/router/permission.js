/*
 * @Description:
 * @Author: shufei
 * @Date: 2021-11-11 20:57:40
 * @LastEditTime: 2021-11-20 14:11:19
 * @LastEditors: shufei
 */
import router from '@/router'
import store from '@/store'
import { clearPending } from '../core/request/lib/utils'

const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)

router.beforeEach(async (to, from, next) => {
  // 路由跳转，清除所有请求
  clearPending()
  // 标题同步路由里面的标题
  document.title = to.meta.title || 'vue-H5'
  console.log(to, 'to')
  // 如果 目标路由 params 上指定 左右滑动方法 direction，就执行指定的方法
  if (to.params.direction) {
    store.commit('updateDirection', to.params.direction)
  } else {
    const toIndex = history.getItem(to.path)
    const fromIndex = history.getItem(from.path)
    // 判断并记录跳转页面是否访问过，以此判断跳转过渡方式
    if (toIndex) {
      if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
        store.commit('updateDirection', 'forward')
      } else {
        store.commit('updateDirection', 'back')
      }
    } else {
      ++historyCount
      history.setItem('count', historyCount)
      to.path !== '/' && history.setItem(to.path, historyCount)
      store.commit('updateDirection', 'forward')
    }
  }
  next()
})

router.afterEach(() => {
  // store.dispatch('page/onLoading', false)
})
