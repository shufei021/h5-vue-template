<!--
 * @Description:
 * @Author: shufei
 * @Date: 2021-11-11 11:45:35
 * @LastEditTime: 2021-11-11 19:28:54
 * @LastEditors: shufei
-->
<template>
  <div class="container">
    <img :src="topImg" alt="">
    <img :src="csImg" alt="" style="width:100%">
    <img :src="qywxImg" alt="">
  </div>
</template>

<script>
import topImg from '@/assets/images/mescroll-totop.png'
import csImg from '@/assets/images/cs.jpg'
import qywxImg from '@/assets/images/qywx.png'

export default {
  data () {
    return {
      topImg,
      csImg,
      qywxImg
    }
  }
}
</script>
