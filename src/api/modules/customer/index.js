/*
 * @Description:
 * @Author: shufei
 * @Date: 2021-11-17 15:50:28
 * @LastEditTime: 2021-11-21 00:21:23
 * @LastEditors: shufei
 */
import { get } from '@/core/request'

// 获取客户列表
export const list = params => get(`api/user`, params)
