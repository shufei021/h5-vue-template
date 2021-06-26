/**
 * @description：获取元素属性
 * @param { Stirng | Element } el
 * @param { String } attrName
 */
 export const getAttr = function (el, attrName) {
    try {
        el = typeof el === 'string' ? document.querySelector(el) : el
        return el.getAttribute(attrName)
    } catch (error) {
        return {}
    }
}

/**
 * @description：设置元素属性
 * @param {Object} attrs
 */
export const setAttr = function (el, attrs) {
    for (const key in attrs) {
        el.setAttribute(key, attrs[key])
    }
    return el
}
