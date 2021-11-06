/*
 * @Description:
 * @Author: shufei
 * @Date: 2021-11-04 09:50:04
 * @LastEditTime: 2021-11-05 10:54:40
 * @LastEditors: shufei
 */
const IS_PROD = ['production'].includes(process.env.VUE_APP_ENV)
const plugins = [
  [
    'import',
    {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: name => `${name}/style/less`
    },
    'vant'
  ]
]
// 去除 console.log
if (IS_PROD) {
  plugins.push('transform-remove-console')
}
module.exports = {
  presets: [['@vue/cli-plugin-babel/preset', { useBuiltIns: 'usage', corejs: 3 }]],
  plugins
}
