/*
 * @Description: dom 扩展
 * @Author: shufei
 * @Date: 2021-11-04 20:46:37
 * @LastEditTime: 2021-11-19 11:25:54
 * @LastEditors: fengchunchen
 */
export const copyText = function (text) {
  const input = document.createElement('input')
  input.value = text // 修改文本框的内容
  document.body.appendChild(input)
  input.select() // 选中文本
  document.execCommand('copy')// 执行浏览器复制命令
  document.body.removeChild(input)
}
