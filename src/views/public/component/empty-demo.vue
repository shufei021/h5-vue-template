<!--
 * @Description: Empty 公共组件使用示例
 * @Author: shufei
 * @Date: 2021-11-15 18:46:31
 * @LastEditTime: 2021-11-15 20:23:01
 * @LastEditors: shufei
-->
<template>
  <div>
    <div class="empty-container">
      <!-- empty -->
      <empty :state="state" :text="text"></empty>
      <!-- empty -->
    </div>
    <van-divider content-position="left"><van-tag type="primary">如何使用</van-tag></van-divider>
    <ul class="desc">
      <li>1. 使用指定图片，以及对应的文字提示内容</li>
      <li>2. 只使用指定图片，文案内容自定义</li>
      <li>3. 只使用指定图片，不需要文案内容</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'EmptyDemo',
  data () {
    return {
      state: 1, // 状态值
      text: '缺省', // 状态值对应的文案
      empty: {
        1: '缺省', // 缺省
        2: '内容为空', // 内容为空
        3: '信息为空', // 信息为空
        4: '暂未搜索到内容', // 暂未搜索到内容
        5: '404', // 404
        6: '网络异常', // 网络异常
        7: '连接失败', // 连接失败
        8: '定位失败', // 定位失败
        9: '暂无订单', // 暂无订单
        10: '暂无关注', // 暂无关注
        11: '购物车为空' // 购物车为空
      }
    }
  },
  mounted () {
    this.timer = setInterval(() => {
      this.state === 11 ? (this.state = 1) : this.state++
      this.text = this.empty[this.state]
    }, 1000)
    this.$once('hook:beforeDestroy', () => {
      clearInterval(this.timer)
    })
  }
}
</script>
<style scoped lang="scss">
.desc{
  padding: 0 15px;
  color: #111a34;
}
</style>
