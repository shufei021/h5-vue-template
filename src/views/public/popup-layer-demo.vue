<!--
 * @Description: popuplayer-demo 无限弹出层示例
 * @Author: shufei
 * @Date: 2021-11-08 16:55:32
 * @LastEditTime: 2021-11-11 19:29:53
 * @LastEditors: shufei
-->
<template>
  <div class="container">
    <h1>主页</h1>
    <van-button type="primary" @click="layer.show1=true">打开第一个弹层</van-button>

    <!-- 第一个弹层 -->
    <popup-layer :visible.sync="layer.show1" @onOpen="open" @onClose="close">
      <h1>第一个弹层</h1>
      <van-button type="primary" @click="layer.show1=false">关闭第一个弹层（也可以点击物理返回键）</van-button>
      <van-button type="info" @click="layer.show2=true">打开第二个弹层</van-button>
      <van-cell is-link to="/">销毁测试</van-cell>
    </popup-layer>

    <!-- 第二个弹层 -->
    <popup-layer :visible.sync="layer.show2">
      <h1>第二个弹层</h1>
      <van-button type="primary" @click="layer.show2=false">关闭第二个弹层（也可以点击物理返回键）</van-button>
      <van-button type="info" @click="layer.show3=true">打开第三个弹层</van-button>
    </popup-layer>

    <!-- 第三个弹层 -->
    <popup-layer :visible.sync="layer.show3">
      <h1>第三个弹层</h1>
      <van-button type="primary" @click="layer.show3=false">关闭第二个弹层（也可以点击物理返回键）</van-button>
    </popup-layer>
  </div>
</template>

<script>
export default {
  name: 'PopupLayerDemo',
  data () {
    return {
      layer: {
        show1: false,
        show2: false,
        show3: false
      }
    }
  },
  methods: {
    open () {
      console.log('第一层弹层打开了')
    },
    /**
     * @param {Boolean} isPopstate：关闭弹层事件是否来源物理返回键
     */
    close ({ isPopstate }) {
      console.log(isPopstate ? '点击物理返回键 把 第一层弹层关闭了' : '用其它非物理返回键方式 把 第一层弹层关闭了')
    }
  }
}
</script>
<style lang="less" scoped>
  .container{
    height: 100%;
    overflow: hidden;
  }
</style>
