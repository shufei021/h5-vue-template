<!--
 * @Description: 公共组件使用说明
 * @Author: shufei
 * @Date: 2021-11-15 18:50:40
 * @LastEditTime: 2021-11-19 23:29:13
 * @LastEditors: shufei
-->
<template>
  <div class="container">
    <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">公共组件使用说明</van-divider>
    <van-cell is-link to="/public/component/empty-demo">Empty 缺省公共组件示例</van-cell>
  </div>
</template>
<script>
export default {
  name: 'PublicComponent'
}
</script>
