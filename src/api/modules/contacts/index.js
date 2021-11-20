/*
 * @Description: 联系人相关api
 * @Author: shufei
 * @Date: 2021-11-17 15:50:23
 * @LastEditTime: 2021-11-20 14:02:06
 * @LastEditors: shufei
 */
import { get, post, service } from '@/core/request'

// 获取联系人列表
export const list = params => get(`${service.contacts}/api/contacts_list`, params)
export const add = params => post(`${service.contacts}/api/contacts_add`, params)
