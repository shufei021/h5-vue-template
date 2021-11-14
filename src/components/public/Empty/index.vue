<!--
 * @Description:缺省也组件
 * @Author: shufei
 * @Date: 2021-11-14 18:18:58
 * @LastEditTime: 2021-11-14 18:59:23
 * @LastEditors: shufei
-->
<template>
  <div class="empty-wrap">
    <div class="img">
      <img :src="empty[state]" alt="">
    </div>
    <div class="text">暂无数据</div>
  </div>
</template>
<script>
import search from '@/assets/images/empty/empty_search.png'
import info from '@/assets/images/empty/empty_info.png'
export default {
  name: 'Empty',
  props: {
    state: {
      type: [Number, String],
      default: 1 // 1 搜索 2 信息
    }
  },
  data () {
    return {
      empty: {
        1: search,
        2: info
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.empty-wrap{
    width: 100%;
    display: flex;
    flex-direction: column;
    .img{
        height: 180px;
        img{
            width: 180px;
            height: 180px;
            display: block;
            margin:  0 auto;
        }
    }
    .text{
        text-align: center;
    }
}
</style>
