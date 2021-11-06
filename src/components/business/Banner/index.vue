<!--
 * @Description:
 * @Author: shufei
 * @Date: 2021-11-04 12:46:29
 * @LastEditTime: 2021-11-04 21:26:37
 * @LastEditors: shufei
-->
<template>
  <div>
    <!-- 输入任意文本 -->
    <van-field v-model="text" label="文本" />
    <!-- 输入手机号，调起手机号键盘 -->
    <van-field v-model="tel" type="tel" label="手机号" />
    <!-- 允许输入正整数，调起纯数字键盘 -->
    <van-field v-model="digit" type="digit" label="整数" />
    <!-- 允许输入数字，调起带符号的纯数字键盘 -->
    <van-field v-model="number" type="number" label="数字" />
    <!-- 输入密码 -->
    <van-field v-model="password" type="password" label="密码" />
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data () {
    return {
      tel: '',
      text: '',
      digit: '',
      number: '',
      password: ''
    }
  }
}
</script>
