<!--
 * @Description:
 * @Author: shufei
 * @Date: 2021-11-10 23:26:54
 * @LastEditTime: 2021-11-11 19:29:59
 * @LastEditors: shufei
-->
<template>
  <div class="container">
    <h1>svg 列表大全</h1>
    <div class="svg-list">
      <div class="svg-list-item svg-wrap" v-for="(name,index) in svgNameList" :key="index" :style="{color:$utils.randomHexColorCode()}" @click="$toast(name)">
        <svg-icon :icon-class="name" />
      </div>
    </div>
  </div>
</template>

<script>
const files = require.context('@/assets/icons/svg', false, /\.svg$/)
export default {
  name: 'SvgDemo',
  data () {
    return {
      svgNameList: files.keys().map(i => i.replace(/(\.\/|\.svg)/g, ''))
    }
  }
}
</script>
<style scoped>
.svg-list{
  overflow: auto;
}
.svg-list::after{
  content: '';
  display: block;
  clear: both;
}
.svg-wrap{
  font-size: 40px;
  color: #4fc08d;
  float: left;
}
</style>
