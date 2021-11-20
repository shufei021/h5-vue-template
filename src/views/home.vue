<!--
 * @Description:
 * @Author: shufei
 * @Date: 2021-11-04 09:50:04
 * @LastEditTime: 2021-11-20 13:46:22
 * @LastEditors: shufei
-->
<template>
  <div class="container">
    <!-- vue2.0 + vant H5通用模板 -->
    <div class="text-gradient"></div>
    <van-cell is-link to="/public">常用组件文档</van-cell>
    <van-cell is-link to="/public/component">公共组件文档</van-cell>
    <van-button @click="request">请求</van-button>
  </div>
</template>

<script>

import { emotionList } from 'mixins'
import { Divider } from 'vant'

export default {
  name: 'Home',
  components: { [Divider.name]: Divider },
  mixins: [emotionList],
  data () {
    return {

    }
  },
  created () {

  },
  mounted () {
    // this.$api.contacts.list({ name: 'SHUFEI', age: 11 }).then(res => {
    //   console.log(res, 'res')
    // })
    // this.$api.contacts.add({ name: 'SHUFEI', age: 11 }).then(res => {
    //   console.log(res, 'res')
    // })
    // this.showloading()
  },
  methods: {
    async request () {
      const result = await this.$api.customer.list()
      console.log(result)
    }
  }
}
</script>

<style scoped lang="scss">
h1{
  font-size: 14px;
}
.cle{
  width: 200px;
  height: 400px;
}
.scroller{
  height: 100vh;
   overflow: auto;
   .mscroll_warp>div{
     padding: 15px 0;
   }
}
.content{
  width: 100px;
}
.wrap{
  background-color: #fff;
  padding: 15px;
  line-height: 24px;
}
.text-gradient {
  height: 40px;
  // font-size: 20px;
  // text-align: center;
  // background: linear-gradient(94.23deg,#5374fa 12.41%,#fd9179 52.55%,#ff6969 89.95%);
  background-image: url(data:image/png;base64,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);
  background-repeat: no-repeat;
  background-position: center;
  padding: 10px 0;
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;

}

</style>
