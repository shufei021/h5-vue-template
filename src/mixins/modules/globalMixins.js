/*
 * @Description: 项目全局混入
 * @Author: shufei
 * @Date: 2021-11-04 19:59:59
 * @LastEditTime: 2021-11-05 17:14:09
 * @LastEditors: shufei
 */
export default {
  data () {
    return {
      // GLOBAL: '全局混入'
    }
  },
  created: function () {
    // console.log(this.GLOBAL, '可以获取每个组件实例的值')
  },
  methods: {
    showloading (tip, forbidClick = true, duration = 0) {
      this.$toast.loading({
        message: tip || '加载中...',
        forbidClick,
        duration
      })
    },
    hideloading () {
      this.$toast.clear()
    }
  }

}
