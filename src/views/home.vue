<!--
 * @Description:
 * @Author: shufei
 * @Date: 2021-11-04 09:50:04
 * @LastEditTime: 2021-11-06 18:36:35
 * @LastEditors: shufei
-->
<template>
  <div>
    <Banner></Banner>
    <div class="cle">反对反对反对反对反对反对法十公分的身高</div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Banner } from '@/components'
import { emotionList } from '@/mixins'
export default {
  components: { Banner },
  mixins: [emotionList],
  data() {
    return {
      active: '',
      num: '2020/01/01',
    }
  },
  created() {},
  mounted() {
    console.log(this.$utils)
    // this.showloading()
    window.addEventListener('online', function () {
      alert('正常工作')
    })

    window.addEventListener('offline', function () {
      alert('不在线')
    })
  },
  methods: {},
}
</script>

<style scoped lang="less">
h1 {
  font-size: 14px;
}
.cle {
  width: 200px;
  height: 400px;
}
</style>
