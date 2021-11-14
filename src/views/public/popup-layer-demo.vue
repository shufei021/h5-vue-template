<!--
 * @Description: popuplayer-demo 无限弹出层示例
 * @Author: shufei
 * @Date: 2021-11-08 16:55:32
 * @LastEditTime: 2021-11-14 20:05:15
 * @LastEditors: shufei
-->
<template>
  <div class="container">
    <van-divider>页面首页</van-divider>
    <van-button type="primary" @click="layer.show1=true">打开第一个弹层</van-button>

    <!-- 第一个弹层 -->
    <popup-layer :visible.sync="layer.show1" @onOpen="open" @onClose="close" :extra="{lv:1}" ref="lv1">
      <van-divider>第一个弹层页面</van-divider>
      <van-button type="primary" @click="layer.show1=false">关闭第一个弹层（也可以点击物理返回键）</van-button>
      <van-button type="info" @click="layer.show2=true">打开第二个弹层</van-button>
      <!-- <van-cell is-link > 不要再popuplayer里面销毁测试</van-cell> -->
    </popup-layer>

    <!-- 第二个弹层 -->
    <popup-layer :visible.sync="layer.show2" :extra="{lv:2}" @onOpen="open" @onClose="close" ref="lv2">
      <van-divider>第二个弹层页面</van-divider>
      <van-button type="primary" @click="layer.show2=false">关闭第二个弹层（也可以点击物理返回键）</van-button>
      <van-button type="info" @click="layer.show3=true">打开第三个弹层</van-button>
      <van-button type="warning" @click="closeAll(2)">关闭所有弹层</van-button>
    </popup-layer>

    <!-- 第三个弹层 -->
    <popup-layer :visible.sync="layer.show3" :extra="{lv:3}" @onOpen="open" @onClose="close" ref="lv3">
      <van-divider>第三个弹层页面</van-divider>
      <van-button type="primary" @click="layer.show3=false">关闭第二个弹层（也可以点击物理返回键）</van-button>
      <van-button type="warning" @click="closeAll(3)">关闭所有弹层</van-button>
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
    open (id, extra) {
      console.log('第' + extra.lv + '层弹层打开了', id, extra)
    },
    /**
     * @param {Boolean} isPopstate：关闭弹层事件是否来源物理返回键
     */
    close ({ isPopstate }, extra) {
      console.log(isPopstate ? '点击物理返回键 把 第' + extra.lv + '层弹层关闭了' : '用其它非物理返回键方式 把 第' + extra.lv + '层弹层关闭了', extra)
    },
    closeAll (lv) {
      for (let i = 1; i <= lv; i++) {
        this.$refs['lv' + i].closeLv()
      }
    }
  }
}
</script>
<style lang="less" scoped>
  .container{
    height: 100%;
    overflow: hidden;
    button{
      width: 100%;
    }
  }
</style>
