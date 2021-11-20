<!--
 * @Description:
 * @Author: shufei
 * @Date: 2021-11-09 18:17:56
 * @LastEditTime: 2021-11-17 20:09:55
 * @LastEditors: shufei
-->
<template>
  <div class="container">
    <van-divider :style="{ color: '#1989fa', borderColor: 'rgb(7, 193, 96)', padding: '0 16px' }"><span style="color:rgb(74, 199, 114)">TabBar</span>&nbsp; 组件使用示例</van-divider>
    <van-cell-group>

      <van-cell title="设置菜单数量">
        <template #right-icon>
          <van-stepper v-model="count" min="0" max="4" @change="countChange" />
        </template>
      </van-cell>

      <van-cell title="是否加入定制菜单">
        <template #right-icon>
          <van-switch v-model="specChecked" @change="specSwitchChange" active-color="#61daa5" inactive-color="#d2d2d2" />
        </template>
      </van-cell>

      <van-cell title="主题色切换">
        <template #right-icon>
          <van-switch v-model="checked" @change="switchChange" active-color="#61daa5" inactive-color="#d2d2d2" />
        </template>
      </van-cell>
    </van-cell-group>

    <TabBar
      :tabs="tabbars"
      :defaultActive="defaultActive"
      :inactiveColor="$utils.randomHexColorCode()"
      :dotBgColor="$utils.randomHexColorCode()"
      dotColor="#fff"
      @change="change"
      @routeChange="routeChange"
    />

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
      count: 0,
      specChecked: false,
      checked: false,
      defaultActive: 1,
      tabbars: [],
      cache: [],
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
    },
    switchChange (val) {
      this.checked = val
    },
    specSwitchChange (val) {
      const spec = {
        to: {
          name: 'selecttemplate'
        },
        icon: 'tabar-add',
        meta: {
          isOnlyIcon: true
        }
      }
      if (val) {
        this.tabbars.push(spec)
      } else {
        this.tabbars = this.tabbars.filter(i => Object.prototype.hasOwnProperty.call(i, 'title'))
      }
    },
    countChange (val) {
      val = val - 1
      const menus = [
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
        {
          title: '他人汇报',
          to: {
            name: 'selectemployee'
          },
          icon: 'tabar-other',
          active: 'tabar-other',
          badge: 1
        },
        {
          title: '设置',
          to: {
            name: 'selectemployee'
          },
          icon: 'tabar-setting',
          active: 'tabar-setting'
        }
      ]
      if (this.cache.includes(val) || val === -1) {
        val = val === -1 ? 0 : val + 1
        const clone = this.$utils.deepClone(this.tabbars).filter(i => Object.prototype.hasOwnProperty.call(i, 'title'))
        clone.splice(val, 1)
        this.tabbars = clone
        this.cache.splice(val, 1)
      } else {
        this.tabbars.push(menus[val])
        this.cache.push(val)
      }
    }
  }
}
</script>
<style lang="scss">
  .container{
    height: 100%;
  }
</style>
