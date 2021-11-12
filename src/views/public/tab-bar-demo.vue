<!--
 * @Description:
 * @Author: shufei
 * @Date: 2021-11-09 18:17:56
 * @LastEditTime: 2021-11-11 19:30:06
 * @LastEditors: shufei
-->
<template>
  <div class="container">
    <TabBar
      :tabs="tabbars"
      :defaultActive="defaultActive"
      :inactiveColor="$utils.randomHexColorCode()"
      :dotBgColor="$utils.randomHexColorCode()"
      dotColor="#fff"
      @change="change"
      @routeChange="routeChange"
    ></TabBar>
  </div>
</template>
<script>
import { TabBar } from '@/components'
export default {
  name: 'TabBarDemo',
  components: { TabBar },
  props: {},
  data () {
    return {
      defaultActive: 1,
      tabbars: [
        {
          title: '我的汇报',
          to: {
            name: 'home'
          },
          icon: 'tabar-mine',
          active: 'tabar-mine',
          badge: 9
        },
        {
          title: '抄送给我',
          to: {
            name: 'copytome'
          },
          icon: 'tabar-copy',
          active: 'tabar-copy'
        },
        // {
        //   to: {
        //     name: 'selecttemplate'
        //   },
        //   icon: 'tabar-add',
        //   meta: {
        //     isOnlyIcon: true
        //   }
        // },
        {
          title: '他人汇',
          to: {
            name: 'selectemployee'
          },
          icon: 'tabar-other',
          active: 'tabar-other',
          badge: 1
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
    },
    routeChange (path) {
      console.log(path, 'tab 路由切换')
    }
  }
}
</script>
<style lang="less" scoped>
</style>
