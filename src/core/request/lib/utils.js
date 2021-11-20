/*
 * @Description: 辅助函数
 * @Author: shufei
 * @Date: 2021-11-20 13:02:40
 * @LastEditTime: 2021-11-20 14:11:49
 * @LastEditors: shufei
 */
import axios from 'axios'
import Qs from 'qs'
import { Toast } from 'vant' // vant的toast提示框组件，大家可根据自己的ui组件更改。
import router from '@/router'

const pendingRequest = new Map()

export function generateReqKey (config) {
  const { method, url, params, data } = config
  return [method, url, Qs.stringify(params), Qs.stringify(data)].join('&')
}

export function addPendingRequest (config) {
  const requestKey = generateReqKey(config)
  config.cancelToken =
    config.cancelToken ||
    new axios.CancelToken((cancel) => {
      if (!pendingRequest.has(requestKey)) {
        pendingRequest.set(requestKey, cancel)
      }
    })
}

export function removePendingRequest (config) {
  const requestKey = generateReqKey(config)
  if (pendingRequest.has(requestKey)) {
    const cancel = pendingRequest.get(requestKey)
    cancel(requestKey)
    pendingRequest.delete(requestKey)
  }
}

/**
 * 提示函数
 * 禁止点击蒙层、显示一秒后关闭
 */
export const tip = (msg) => {
  Toast({
    message: msg,
    duration: 1000,
    forbidClick: true
  })
}

/**
   * loading
   */
export const loading = {
  opne () {
    Toast.loading({ forbidClick: true, duration: 0 })
  },
  close () {
    Toast.clear()
  }
}

/**
   * 跳转登录页
   * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
   */
export const toLogin = () => {
  router.replace({
    path: '/login',
    query: {
      redirect: router.currentRoute.fullPath
    }
  })
}

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
export const errorHandle = (status, other) => {
  // 状态码判断
  switch (status) {
    // 401: 未登录状态，跳转登录页
    case 401:
      toLogin()
      break
      // 403 token过期
      // 清除token并跳转登录页
    case 403:
      tip('登录过期，请重新登录')
      localStorage.removeItem('token')
      //   store.commit('loginSuccess', null)
      setTimeout(() => {
        toLogin()
      }, 1000)
      break
      // 404请求不存在
    case 404:
      tip('请求的资源不存在')
      break
    default:
      console.log(other)
  }
}

/**
 * 清空 pending 中的请求（在路由跳转时调用）
 */
export const clearPending = () => {
  console.log(pendingRequest, 'pendingRequest')
  for (const [url, cancel] of pendingRequest) {
    cancel(url)
  }
  pendingRequest.clear()
}
