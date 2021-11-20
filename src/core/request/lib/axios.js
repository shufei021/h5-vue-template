/*
 * @Description:
 * @Author: shufei
 * @Date: 2021-11-20 13:09:47
 * @LastEditTime: 2021-11-20 14:28:41
 * @LastEditors: shufei
 */
import axios from 'axios'
import store from '@/store'
import { addPendingRequest, removePendingRequest, loading, errorHandle } from './utils'

// 创建axios实例
const instance = axios.create({
  timeout: 1000 * 30
  // cancelToken: source.token // 取消请求（比如你进入某个路由后，可能就停在了这个页面就1s时间， 就立马进入了下个路由，这时，前边这个路由的请求就可以取消掉了）
})

instance.interceptors.request.use(
  function (config) {
    // 重复请求校验
    removePendingRequest(config) // 检查是否存在重复请求，若存在则取消已发的请求
    addPendingRequest(config) // 把当前请求添加到pendingRequest对象中
    // 如果是 非登录页面 ，对携带 token 须校验
    if (config.url !== '/login') {
      const token = localStorage.getItem('token')
      // 请求头携带token
      config.headers.Authorization = token
    }

    // 登录流程控制中，根据本地是否存在token判断用户的登录情况
    // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token
    // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码
    // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。
    config.showLoading && loading.open()
    // const token = store.state.token
    // token && (config.headers.Authorization = token)
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    removePendingRequest(response.config) // 从pendingRequest对象中移除请求
    return response
  },
  (error) => {
    removePendingRequest(error.config || {}) // 从pendingRequest对象中移除请求
    if (instance.isCancel(error)) {
      console.log('已取消的重复请求：' + error.message)
    } else {
      // 添加异常处理
    }
    const { response } = error
    if (response) {
      // 请求已发出，但是不在2xx的范围
      errorHandle(response.status, response.data.message)
      return Promise.reject(response)
    } else {
      // 处理断网的情况
      // eg:请求超时或断网时，更新state的network状态
      // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
      // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
      if (!window.navigator.onLine) {
        store.commit('changeNetwork', false)
      } else {
        return Promise.reject(error)
      }
    }
    return Promise.reject(error)
  }
)

export default instance
