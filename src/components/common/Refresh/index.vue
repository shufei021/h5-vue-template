<!--
 * @Description: 全局通用的断网提示 刷新组件
 * @Author: shufei
 * @Date: 2021-11-06 17:53:01
 * @LastEditTime: 2021-11-06 17:53:02
 * @LastEditors: shufei
-->
<template>
  <div class="wrapper"></div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {}
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.$router.replace(from.fullPath)
    })
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
}
</script>
<style lang="scss" scoped>
.wrapper {
}
</style>
