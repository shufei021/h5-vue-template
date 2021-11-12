<!--
 * @Description: 底部导航栏组件  （组件类型：通用组件）
 * @Author: shufei
 * @Date: 2020-12-30 17:12:39
 * @LastEditTime: 2021-11-12 20:31:08
 * @LastEditors: shufei
-->
<template>
  <div class="zt-tab-container safe-area-bottom zt-tab-fxied van-hairline--top" v-show="isTabShow">
    <div
      class="zt-tab-item"
      v-for="(item, index) in tabs"
      :key="index"
      :style="{ color: activeIndex === index ? activeColor : inactiveColor ? inactiveColor : '' }"
      :class="{ 'zt-tab-item--active': activeIndex === index }"
      @click="change(index, item)"
    >
      <div class="zt-tab-item__icon" :class="{'is-only-icon':item.meta&&item.meta.isOnlyIcon }" >
        <svg-icon :icon-class="item.active || item.icon" />
        <!-- 徽标提示 -->
        <!-- 红点 -->
        <div class="van-info van-info--dot" :style="{ color: dotColor, backgroundColor: dotBgColor }" v-if="item.dot"></div>
        <!-- 数字红点 -->
        <div class="van-info zt-info" :style="{ color: dotColor, backgroundColor: dotBgColor }" v-if="item.badge">{{ item.badge }}</div>
      </div>
      <div class="zt-tab-item__text"><span>{{ item.title }}</span></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TabBar',
  props: {
    // 激活项 字体颜色
    activeColor: {
      type: String,
      default: ''
    },
    // 图标和文字 默认字体颜色
    inactiveColor: {
      type: String,
      default: ''
    },
    // badge 字体颜色
    dotColor: {
      type: String,
      default: ''
    },
    // badge 背景颜色
    dotBgColor: {
      type: String,
      default: ''
    },
    // 默认激活项
    defaultActive: {
      type: Number,
      default: 0
    },
    // tab 列表
    tabs: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data () {
    return {
      activeIndex: this.defaultActive === undefined ? 0 : this.defaultActive, // 激活项 索引
      topIndex: '',
      moreData: null,
      isTabShow: true
    }
  },
  watch: {
    /**
     * @description: 监听 默认激活项索引
     */
    defaultActive: {
      handler (i) {
        i !== undefined && (this.activeIndex = i)
      }
    },
    /**
     * @description: 监听路由变化
     */
    $route: {
      handler (path) {
        this.$emit('routeChange', path)
      },
      immediate: true
    }
  },
  methods: {
    change (index, item) {
      const oldActionItem = this.$utils.deepClone(this.tabs[this.activeIndex])
      const oldActionIndex = this.activeIndex
      this.activeIndex = index
      this.$emit('change', {
        oldActionIndex, // 旧的激活项的索引
        newActionIndex: index, // 新的激活项的索引
        oldActionItem, // 旧的激活项对象
        newActionItem: this.$utils.deepClone(item) // 新的激活项对象
      })
    }
  }
}
</script>
<style scoped lang="less">
 .is-only-icon{
    margin-bottom: 0!important;
    font-size: 42px!important;
    color: #cecece!important;
 }
.zt-tab-container {
    position: relative;
    padding-bottom: 0;
    z-index: 1;
    display: flex;
    box-sizing: content-box;
    width: 100%;
    height: 50px;
    background-color: #fff;
}
.zt-tab-fxied {
    position: fixed;
    bottom: 0;
    left: 0;
}
.zt-tab-item {
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    -webkit-box-orient: vertical;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #646566;
    font-size: 12px;
    line-height: 1;
    cursor: pointer;
    &.zt-tab-item--active {
        color: #27b2ff;
        background-color: #fff;
    }
    .zt-tab-item__icon {
        position: relative;
        margin-bottom: 4px;
        font-size: 20px;
        .svg-icon {
            pointer-events: none;
            width: 1em;
            height: 1em;
            vertical-align: -0.15em;
            fill: currentColor;
            overflow: hidden;
        }
        .zt-info {
            margin-top: 4px;
        }
    }
    .zt-tab-item__text {
        font-size: 10px;
        line-height: 10px;
    }
}
.safe-area-bottom {
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
</style>
