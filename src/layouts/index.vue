<!--
 * @Description: 布局容器组件
 * @Author: shufei
 * @Date: 2021-11-08 21:36:52
 * @LastEditTime: 2021-11-11 17:09:15
 * @LastEditors: shufei
-->
<template>
  <!-- app-容器 -->
  <div class="app-container">
    <!-- 布局容器 -->
    <div class="layout-content " ref="wrapper">
      <!-- 如果当前路由 meta.keepAlive 为true 就缓存该组件-->
      <keep-alive v-if="$route.meta.keepAlive"><router-view></router-view></keep-alive>
      <!-- 不缓存 -->
      <router-view v-else></router-view>
    </div>
    <!-- tab 显示条件：非crm源，并且 路由isTabBar为true-->
    <div class="layout-footer" v-if="$route.meta.isTabBar">
      <tab-bar :defaultActive="activeIndex" :tabs="tabbars" @change="change" />
    </div>
    <page-loading v-if="isLoading" />
  </div>
</template>
<script>
import { TabBar } from '@/components'
import pageLoading from '@/components/common/pageLoading'
import VConsole from 'vconsole'

export default {
  name: 'AppLayout',
  computed: {
    isLoading () {
      return this.$store.state.page.isLoading
    }
  },
  components: {
    pageLoading,
    TabBar
  },
  data () {
    return {
      tabbars: [
        {
          title: '我的汇报',
          to: {
            name: 'home'
          },
          icon: 'tabar-mine',
          active: 'tabar-mine'
        },

        {
          title: '抄送给我',
          to: {
            name: 'copytome'
          },
          icon: 'tabar-copy',
          active: 'tabar-copy'
        },

        {
          title: '抄送给我1',
          to: {
            name: 'selecttemplate'
          },
          icon: 'tabar-add'
        },
        {
          title: '他人汇报',
          to: {
            name: 'selectemployee'
          },
          icon: 'tabar-other',
          active: 'tabar-other'
        }
      ],
      activeIndex: 0
    }
  },

  methods: {
    /**
     * 选中项发生改变事件
     */
    change ({ oldActionIndex, newActionIndex, oldActionItem, newActionItem }) {
      console.log(oldActionIndex, '旧索引')
      console.log(newActionIndex, '新索引')
      console.log(oldActionItem, '旧选中对象')
      console.log(newActionItem, '旧选中对象')
    }
  },
  created () {
    this.$route.query.debug && new VConsole()
  },
  mounted () {

  }
}
</script>
<style scoped lang="scss">
.app-container {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    .layout-content {
        flex: 1;
        position: relative;
        box-sizing: border-box;
        height: calc(100% - 50px);
    }
    .layout-footer {
        height: 50px;
    }
    .layout-height {
        height: 100%;
    }
    .layout-footer-wrap {
        height: 50px;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        .layout-footer-center {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            .layout-footer-link {
                display: inline-block;
                display: flex;
                color: #404040;
                font-family: -apple-system-font, 'Helvetica Neue', sans-serif;
                width: 100%;
                justify-content: center;
                .layout-footer-icon {
                    margin-right: 15px;
                    color: #404040;
                    font-size: $base-size;
                }
            }
        }
    }
}
</style>
