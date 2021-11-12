/*
 * @Description: cart_calc.js 购物车计算相关api
 * @Author: shufei
 * @Date: 2021-11-04 12:46:12
 * @LastEditTime: 2021-11-12 11:31:41
 * @LastEditors: shufei
 */
import { http, base } from '@/core/request'
/**
 *
 * @returns 示例 api
 *
 */

// 获取购物车商品分类
export const getCartProductCategory = (params) => http.get(`${base.cart}/api/cart_get_category`, params)

// 获取购物车商品数量
export const getCartProductCount = (params) => http.get(`${base.cart}/api/cart_get_count`, params)
