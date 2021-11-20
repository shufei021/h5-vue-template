<!--
 * @Description:
 * @Author: shufei
 * @Date: 2021-11-04 12:46:29
 * @LastEditTime: 2021-11-17 13:59:27
 * @LastEditors: shufei
-->
<template>
  <!-- <div class="mescroll-box"> -->
  <!--mescroll滚动区域的基本结构-->
  <mescroll-vue
    ref="mescroll"
    :down="mescrollDown"
    :up="mescrollUp"
    @init="mescrollInit"
    v-on="$listeners"
    v-bind="$attrs"
  >
    <slot></slot>
  </mescroll-vue>
  <!-- </div> -->
</template>

<script>
// 引入mescroll的vue组件
import MescrollVue from 'mescroll.js/mescroll.vue'
import topIcon from '@/assets/images/mescroll-totop.png'
import emptyIcon from '@/assets/images/nodata.png'
export default {
  name: 'Mescroll',
  components: {
    MescrollVue // 注册mescroll组件
  },
  props: {
    // 是否启用下拉刷新
    allowDown: {
      type: Boolean,
      default: true
    },
    page: {
      type: Object,
      default () {
        return {
          num: 0,
          size: 20,
          pageSize: 20
        }
      }
    },
    // 是否启用上拉加载
    allowUp: {
      type: Boolean,
      default: true
    },
    warpId: {
      type: String,
      default: ''
    },
    // 加载中的提示文本
    textLoading: {
      type: String,
      default: '加载中...'
    },
    // 下拉的距离在offset范围内的提示文本
    textInOffset: {
      type: String,
      default: '下拉刷新'
    },
    // 下拉的距离大于offset范围的提示文本
    textOutOffset: {
      type: String,
      default: '释放更新'
    },
    // 上拉无数据提示语
    htmlNodata: {
      type: String,
      default: '<p class="upwarp-nodata" style="color: #c5cad5;font-size:14px;">没有更多了</p>'
    },
    // 返回顶部图片 本地图片用require
    topIcon: {
      type: String,
      default: topIcon
    },
    emptyIcon: {
      type: String,
      default: emptyIcon
    },
    // 回到顶部按钮的配置 10000px才是显示回到顶部按钮
    offsetTop: {
      type: Number,
      default: 10000
    },
    // 是否在初始化完毕之后自动执行一次下拉刷新
    autoRefresh: {
      type: Boolean,
      default: true
    },
    // 是否允许ios的bounce回弹;
    isBounce: {
      type: Boolean,
      default: true
    },
    // 懒加载
    lazyLoad: Boolean
  },
  data () {
    return {
      mescroll: null, // mescroll实例对象
      // 下拉刷新的配置
      mescrollDown: {
        use: this.allowDown,
        offset: 50,
        auto: this.autoRefresh,
        hardwareClass: 'mescroll-hardware',
        resetClass: 'mescroll-downwarp-reset',
        warpClass: 'mescroll-downwarp',
        mustToTop: true,
        textOutOffset: this.textOutOffset,
        textLoading: this.textLoading,
        callback: this.downCallback,
        beforeLoading: this.showDownLoading,
        htmlContent: `<p class="downwarp-progress"></p><p class="downwarp-tip">加载中...</p>`
      },
      // 上拉加载的配置.
      mescrollUp: {
        use: this.allowUp,
        scrollbar: {
          use: false,
          barClass: 'mescroll-bar'
        },
        isBounce: this.isBounce,
        callback: this.upCallback,
        // 以下是一些常用的配置,当然不写也可以的.
        page: this.page,
        htmlNodata: this.htmlNodata,
        noMoreSize: 10, // 如果列表已无数据,可设置列表的总数量要大于3才显示无更多数据;
        empty: {
          // 列表第一页无任何数据时,显示的空提示布局; 需配置warpId才显示
          warpId: this.warpId, // 父布局的id (1.3.5版本支持传入dom元素)
          icon: this.emptyIcon, // 图标,默认null,支持网络图
          tip: '暂无数据' // 提示
        },
        toTop: {
          // 回到顶部按钮
          src: this.topIcon, // 图片路径,默认null,支持网络图
          offset: this.offsetTop // 列表滚动10000px才显示回到顶部按钮
        },
        lazyLoad: {
          use: this.lazyLoad // 是否开启懒加载,默认false  网络地址的属性名 (图片加载成功会移除该属性): <img imgurl='网络图  src='占位图''/>
        },
        onScroll: this.onScroll // 监听列表滚动
      },
      dataList: [] // 列表数据
    }
  },
  beforeDestroy () {
    this.mescroll && this.mescroll.destroy()
  },
  beforeRouteEnter (to, from, next) {
    // 如果没有配置顶部按钮或isBounce,则beforeRouteEnter不用写
    next((vm) => {
      // 滚动到原来的列表位置,恢复顶部按钮和isBounce的配置
      vm.$refs.mescroll && vm.$refs.mescroll.beforeRouteEnter()
    })
  },
  beforeRouteLeave (to, from, next) {
    // 如果没有配置顶部按钮或isBounce,则beforeRouteLeave不用写
    // 记录列表滚动的位置,隐藏顶部按钮和isBounce的配置
    this.$refs.mescroll && this.$refs.mescroll.beforeRouteLeave()
    next()
  },
  created () {},
  methods: {
    // mescroll组件初始化的回调,可获取到mescroll对象
    mescrollInit (mescroll) {
      this.mescroll = mescroll // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
    },
    downCallback (mescroll) {
      // this.$emit('update:page')
      this.$emit('downCallback', mescroll, this.mescroll)
    },
    // 重置下拉
    resetUpScroll () {
      this.mescroll.resetUpScroll()
    },
    showDownLoading () {
      this.mescroll.endUpScroll(false)
      this.mescroll.removeEmpty()
      return false
    },
    // 上拉结束标志
    /**
     * @description:
     * @param {*} dataSize 当前页获取的数据量(注意是当前页)
     * @param {*} hasNext 是否有下一页数据true/false
     * @param {*} systime 加载第一页数据的服务器时间 (可空);
     * @return {*}
     */
    endSuccess (dataSize, hasNext, systime) {
      this.mescroll.endSuccess(dataSize, hasNext, systime)
    },
    // 上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
    upCallback (page, mescroll) {
      this.$emit('upCallback', page, mescroll)
    },
    onScroll (mescroll, y) {
      this.$emit('onScroll', mescroll, y)
    }
  }
}
</script>

<style scoped>
.mescroll-box {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
