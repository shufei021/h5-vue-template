<!--
 * @Description:缺省页组件
 * @Author: shufei
 * @Date: 2021-11-14 18:18:58
 * @LastEditTime: 2021-11-16 11:01:57
 * @LastEditors: shufei
-->
<template>
  <div class="empty-wrap">
    <div class="img">
      <img :src="empty[state].src" alt="">
    </div>
    <div class="text" v-if="text || empty[state].text">{{ text || empty[state].text }}</div>
  </div>
</template>
<script>
import like from '@/assets/images/empty/like.png'
import cart from '@/assets/images/empty/cart.png'
import net from '@/assets/images/empty/net.png'
import empty from '@/assets/images/empty/empty.png'
import order from '@/assets/images/empty/order.png'
import search from '@/assets/images/empty/search.png'
import def from '@/assets/images/empty/def.png'
import content from '@/assets/images/empty/content.png'
import not from '@/assets/images/empty/not.png'
import location from '@/assets/images/empty/location.png'
import connect from '@/assets/images/empty/connect.png'
/**
 *
 * 如何使用:
 * 1. 使用指定图片，以及对应的文字提示内容
 * 2. 只使用指定图片，文案内容自定义
 * 3. 只使用指定图片，不需要文案内容
 *
 */
export default {
  name: 'Empty',
  props: {
    state: {
      type: [Number, String],
      default: 1
    },
    text: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      empty: {
        1: { src: def, text: '暂无数据' }, // 缺省
        2: { src: content, text: '' }, // 内容为空
        3: { src: empty, text: '' }, // 信息为空
        4: { src: search, text: '' }, // 暂未搜索到内容
        5: { src: not, text: '' }, // 404
        6: { src: net, text: '' }, // 网络异常
        7: { src: connect, text: '' }, // 连接失败
        8: { src: location, text: '' }, // 定位失败
        9: { src: order, text: '' }, // 暂无订单
        10: { src: like, text: '' }, // 暂无关注
        11: { src: cart, text: '' } // 购物车为空
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
  padding: 15px 0;
  box-sizing: border-box;
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
    margin-top: 15px;
    font-size: 16px;
    color: #666f83;
  }
}
</style>
