<!--
 * @Description:
 * @Author: shufei
 * @Date: 2021-11-08 16:53:07
 * @LastEditTime: 2021-11-12 10:17:03
 * @LastEditors: shufei
-->
<template>
  <div class="container">
    <ul>
      <li v-for="(img,index) in list" :key="index">
        <img
          v-lazy="img.src"
          data-error="https://img0.baidu.com/it/u=865598530,534584444&fm=26&fmt=auto"
          data-loading="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F10653986855%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639036873&t=3333a74878eb40c3645b2a2a1a02401a">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LazyloadDemo',
  data () {
    return {
      list: Array.from({ length: 30 }, (_, i) => ({ src: 'https://img1.baidu.com/it/u=4131334575,2702308766&fm=26&fmt=auto' + (i ? '' : 1) }))
    }
  },
  created () {

  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style scoped lang="less">
.container{
  width: 100%;
  ul{
    width: 100%;
    li{
      width: 100%;
      overflow: hidden;
      img{
        width: 100%;
        vertical-align: top;
      }
    }
  }
}
</style>
