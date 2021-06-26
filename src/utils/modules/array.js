/**
 * @description: 一维数组转二维数组 (分组)
 * @param {Array} arr:数组
 * @param {Number} num: 平分基数（num 个为一组进行分组（归档））
 */
export const group = function (arr, num) {
    return [...Array(Math.ceil(arr.length / num)).keys()].reduce((p, _, i) => (p.push(arr.slice(i * num, (i + 1) * num)), p), [])
}
/**
 * @description: 数组转树
 * @param {Array} arr：需要转树的json数组
 * @param {Number | string} id：树节点 id
 * @param {String} link：父id
 */
 export const arrayToTree = function (arr, id = null, link = 'pid') {
    return arr.filter(i => i[link] === id).map(i => ({ ...i, children: arrayToTree(arr, i.id, link) }))
}