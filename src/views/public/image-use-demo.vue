<!--
 * @Description:
 * @Author: shufei
 * @Date: 2021-11-11 11:45:35
 * @LastEditTime: 2021-11-20 11:57:20
 * @LastEditors: shufei
-->
<template>
  <div class="container">
    <van-divider :style="{ color: '#7fddad', borderColor: '#07c160', padding: '0 16px' }"><h3>images 使用示例</h3></van-divider>
    <img :src="topImg" alt="">
    <img :src="qywxImg" alt="">
    <img :src="csImg" alt="" style="width:100%">
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
