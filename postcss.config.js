/*
 * @Description:
 * @Author: shufei
 * @Date: 2021-11-05 09:16:45
 * @LastEditTime: 2021-11-17 19:27:44
 * @LastEditors: shufei
 */
module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*']
      // selectorBlackList: ['van-'] // rem 只转换业务的 不转换vant ui的样式
    }
  }
}
