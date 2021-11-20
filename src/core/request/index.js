/*
 * @Description: get 、 post 封装 , service 管理
 * @Author: shufei
 * @Date: 2021-11-20 13:21:06
 * @LastEditTime: 2021-11-20 14:04:05
 * @LastEditors: shufei
 */

/**
 * 需求：
 * 1. 请求响应拦截
 * 2. 路由跳转取消请求
 * 3. 去重重复请求
 */
import http from './lib/axios'

/**
 * 接口域名的管理
 */
export const service = {
  customer: 'customer-service', // 客户
  concacts: 'concacts-service', // 联系人
  cart: 'cart-service' // 购物车
}

/**
 * get方法
 * @param {String} url 请求的url地址
 * @param {Object} params 请求时携带的参数
 * @param {Object} config 额外请求配置参数，便于拦截器里使用
 */
export function get (url, params = {}, config = {}) {
  return new Promise((resolve, reject) => {
    http.get(url, { params, ...config }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}

/**
 * post方法
 * @param {String} url 请求的url地址
 * @param {Object} params 请求时携带的参数
 * @param {Object} config 额外请求配置参数，便于拦截器里使用
 */
export function post (url, data = {}, config = {}) {
  return new Promise((resolve, reject) => {
    http.post(url, data, config).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}
