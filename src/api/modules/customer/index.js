/*
 * @Description:
 * @Author: shufei
 * @Date: 2021-11-17 15:50:28
 * @LastEditTime: 2021-11-20 14:00:00
 * @LastEditors: shufei
 */
import { get } from '@/core/request'

// 获取客户列表
export const list = params => get(`https://jsonplaceholder.typicode.com/todos/1`, params)
