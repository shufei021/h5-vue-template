
// 第一种
// export * from "./modules/user.js"
// export * from "./modules/cart.js"


// 第二种
import Vue from 'vue'
// 通过 webpack 的 require.context 获取指定路径下面的js文件，为了可以进一步深度遍历，
// 第二个参数传为true
const files = require.context('./modules', true, /\.js$/)

// 所有api集合对象
const api = files.keys().reduce((modules, path) => {
    const apis = Object.keys(files(path)).reduce((r, key) => {
        r[key] = files(path)[key]
        return r
    }, {})
    return Object.assign({}, modules, apis)
}, {})
Vue.prototype.$api = api