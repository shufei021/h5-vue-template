<!--
 * @Description:
 * @Author: shufei
 * @Date: 2021-11-10 23:26:54
 * @LastEditTime: 2021-11-17 11:45:10
 * @LastEditors: shufei
-->
<template>
  <div class="container">
    <van-divider :style="{ color: '#7fddad', borderColor: '#07c160', padding: '0 16px' }"><h3>svg 列表大全</h3></van-divider>
    <div class="svg-list">
      <div
        class="svg-list-item svg-wrap"
        v-for="(name, index) in svgNameList"
        :key="index"
        :style="{ color: 'rgb(38, 171, 67)' }"
        @click="itemClickHandle(name)"
      >
        <svg-icon class="svg-item" :icon-class="name" />
        <div class="name">{{ name }}</div>
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
      svgNameList: files.keys().map((i) => i.replace(/(\.\/|\.svg)/g, ''))
    }
  },
  methods: {
    itemClickHandle (name) {
      this.copyText(name)
      this.$toast(`复制 ${name} 成功`)
    },
    copyText (text) {
      const input = document.createElement('input')
      input.value = text // 修改文本框的内容
      document.body.appendChild(input)
      input.select() // 选中文本
      document.execCommand('copy')// 执行浏览器复制命令
      document.body.removeChild(input)
    }
  }
}
</script>
<style scoped lang="scss">
.svg-list {
  overflow: auto;
  background-color: #ebedf0;
}
.svg-list::after {
  content: '';
  display: block;
  clear: both;
}
.svg-wrap {
  font-size: 30px;
  float: left;
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  .name{
    font-size: 10px;
    padding-top: 8px;
  }
}
</style>
