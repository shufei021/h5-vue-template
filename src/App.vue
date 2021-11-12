<!--
 * @Description:
 * @Author: shufei
 * @Date: 2021-11-04 09:50:04
 * @LastEditTime: 2021-11-12 22:12:46
 * @LastEditors: shufei
-->
<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view class="router"></router-view>
      </keep-alive>
      <router-view class="router" v-else></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'App',
  computed: {
    transitionName () {
      return this.$store.state.direction
    }
  },
  created () {
    console.log(this.$store, 'store', this.$route)
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  position: relative;
}

.router {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  // background-color: #fff;
}

.dis {
  display: flex;
  width: 200px;
  height: 200px;
}
</style>
