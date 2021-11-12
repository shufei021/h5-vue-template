<!--
 * @Description:
 * @Author: shufei
 * @Date: 2021-11-04 09:50:04
 * @LastEditTime: 2021-11-12 20:46:48
 * @LastEditors: shufei
-->
<template>
  <div class="container">
    <van-divider>vue2.0 + vant H5通用模板</van-divider>
    <van-cell is-link to="/public">常用组件文档</van-cell>
    <van-cell is-link to="/doc">项目说明文档</van-cell>
    <h1 class="cs">实打实打算</h1>
  </div>
</template>

<script>
import { Banner } from '@/components'
import { emotionList } from '@/mixins'
import { Divider } from 'vant'

export default {
  components: { Banner, [Divider.name]: Divider },
  mixins: [emotionList],
  data () {
    return {

    }
  },
  created () {

  },
  mounted () {
    console.log(this.$api)
    // this.showloading()
    console.log(this.$route.query, '99999')
  },
  methods: {
    /**
     * @description: 客户列表-下拉加载
     * @param {*} mescroll
     */
    downCallback (mescroll) {
      if (!this.mescroll) this.mescroll = mescroll
      mescroll.resetUpScroll()
    },
    /**
     * @description: 客户列表-上拉加载更多
     * @param {*} page
     * @param {*} mescroll
     */
    upCallback (page, mescroll) {
      console.log(page, mescroll)
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
</style>
