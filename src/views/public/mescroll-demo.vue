<!--
 * @Description: mescroll 下拉刷新 上拉加载更多 组件示例
 * @Author: shufei
 * @Date: 2021-11-08 16:32:36
 * @LastEditTime: 2021-11-19 23:32:48
 * @LastEditors: shufei
-->
<template>
  <div class="container">
    <mescroll @downCallback="downCallback" @upCallback="upCallback" :warpId="warpId" :offsetTop="50">
      <div class="mscroll_warp" :id="warpId">
        <div v-for="(item,index) in list" :key="index" class="item">
          <van-swipe-cell>
            <van-card
              num="2"
              price="2.00"
              desc="祖传三百年🐂🍺"
              title="我的牛，你知道"
              class="goods-card"
              thumb="https://img1.baidu.com/it/u=2678120841,2153106267&fm=26&fmt=auto"
            />
            <template #right>
              <van-button square text="删除" type="danger" class="delete-button" />
            </template>
          </van-swipe-cell>
        </div>
      </div>
    </mescroll>
  </div>
</template>

<script>
import { SwipeCell, Card } from 'vant'

export default {
  mame: 'mescroll-demo',
  components: {
    [SwipeCell.name]: SwipeCell,
    [Card.name]: Card
  },
  data () {
    return {
      warpId: this.$utils.guid(), // warpId
      mescroll: null, // mescroll对象
      list: [] // 列表
    }
  },
  methods: {
    /**
     * @description: 列表-下拉加载
     * @param {*} mescroll
     */
    downCallback (mescroll) {
      if (!this.mescroll) this.mescroll = mescroll
      mescroll.resetUpScroll()
    },
    /**
     * @description: 列表-上拉加载更多
     * @param {*} page
     * @param {*} mescroll
     */
    upCallback (page, mescroll) {
      if (page.num === 1) this.list = []

      setTimeout(() => {
        // if (res.error !== null) {
        //   mescroll.endErr()
        //   return this.$toast(res.error.message)
        // }
        const Page = 3
        const list = Array.from({ length: 30 }, (_, i) => i)
        this.list = [...this.list, ...list]
        /**
         *mescroll.endByPage(dataSize, totalPage)
         * 隐藏下拉刷新和上拉加载的状态, 在联网获取数据成功后调用
         * dataSize : 当前页获取的数据总数(注意是当前页)
         * totalPage : 列表的总页数
         *
         *
         */
        if (mescroll) this.$nextTick(() => mescroll.endByPage(list.length, Page))
        // mescroll.endErr()
      }, 1000)
    }
  }
}
</script>

<style scoped lang="scss">
.container{
  height: 100%;
  .item{
    padding-bottom: 10px;
  }
  & .item:last-child{
    padding-bottom: 0;
  }
}
  .goods-card {
    margin: 0;
    background-color: #fff;
  }

  .delete-button {
    height: 100%;
  }
</style>
