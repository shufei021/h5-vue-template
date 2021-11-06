/*
 * @Description: 静态数据入口
 * @Author: shufei
 * @Date: 2021-11-06 18:23:01
 * @LastEditTime: 2021-11-06 18:24:18
 * @LastEditors: shufei
 */
// 字段类型映射
export const fieldmap = {
  Text: 1, // 单行文本
  TextArea: 2, // 多行文本
  Image: 3, // 图片
  File: 4, // 附件
  Number: 5, // 数字
  Price: 6, // 金额
  Date: 7, // 日期
  DateRange: 8, // 日期区间
  Select: 9, // 单选
  CheckBox: 10, // 多选
  List: 11, // 明细
  Description: 12, // 说明
  Product: 13, // 订货商品
  Customer: 14, // 客户
  Boolean: 15, // bool类型
  Location: 16, // 位置
  Order: 17, // 开单
  SignInSignBack: 18, // 签到签退

  // 以下为客户特殊类型
  CustomerType: 65, // 客户分类
  Region: 66, // 销售区域
  Trade: 67, // 客户的行业
  Address: 68, // 地址
  BirthDay: 69, // 生日
  CustomerBillState: -101, // 跟单
  Superior: -22, // 业务经理
  Contacts: -100, // 联系人
}
