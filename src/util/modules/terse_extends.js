/*
 * @Description: 代码简洁之道 # https://juejin.cn/post/7027768816713236487
 * @Author: shufei
 * @Date: 2021-11-16 14:44:45
 * @LastEditTime: 2021-11-18 18:10:27
 * @LastEditors: shufei
 */

/**
 * @description: 简化函数 key为数组字符串
 * @param { Object } o: 像 上面的 3种对象
 * @param { String } s ：像 上面的 3种对象一样的 key 字符串
 * @param { String | Function } d ：没有匹配到 给的默认值 或是 执行的默认函数
 */
export const simplify = function (o, s, d) {
  // 查询是否能找到对应的key
  const k = Object.keys(o).find(k => JSON.parse(k).includes(s))
  // 如果查找到 并且 其对应的值是字符串，那么直接返回该字符串
  if (typeof o[k] === 'string') return o[k]
  // 如果查找到 并且 其对应的值是函数，那么直接执行
  if (typeof o[k] === 'function') return o[k]()
  // 如果没有查找到并且 默认d是字符串，那么就返回默认d值
  if (!o[k] && d && typeof d === 'string') return d
  // 如果没有查找到并且 默认d是函数，那么就直接执行
  if (!o[k] && d && typeof d === 'function') return d()
}

/** @description: 简化函数 对象key为对象字符串
 * @param { Object } o: 对象 map
 * @param { Object } c ：条件对象
 * @param { String | Function } d ：没有匹配到 给的默认值 或是 执行的默认函数
 */
export const simplifyFunc = function (o, c, d) {
  // 获取o对象所有keys
  const keys = Object.keys(o)
  // 如果对象没有属性，抛错
  if (!keys.length) throw Error('不接受空对象')
  // 查询 条件c对象在 keys数组中的索引
  const index = keys.findIndex(i => JSON.stringify(JSON.parse(i)) === JSON.stringify(c))
  // 获取 条件对应的 值
  const val = o[keys[index]]
  // 如果值是字符串，直接返回
  if (typeof val === 'string') return val
  // 如果值是函数，直接返回执行的结果
  if (typeof val === 'function') return val()
  // 如果值不存在，默认值d是字符串，直接返回默认值d
  if (!val && typeof d === 'string') return d
  // 如果值不存在，默认值d是函数，直接返回默认函数的执行结果
  if (!val && typeof d === 'function') return d()
}
