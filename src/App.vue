<!--
 * @Description:
 * @Author: shufei
 * @Date: 2021-11-04 09:50:04
 * @LastEditTime: 2021-11-06 18:54:47
 * @LastEditors: shufei
-->
<template>
  <div id="app">
    <div v-if="!network">
      <h3>我没网了</h3>
      <div @click="onRefresh">刷新</div>
    </div>
    <router-view />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import store from '@/store'
export default {
  name: 'App',
  computed: {
    ...mapState(['network']),
  },
  methods: {
    // 通过跳转一个空页面再返回的方式来实现刷新当前页面数据的目的
    onRefresh() {
      this.$router.replace('/refresh')
    },
  },
  mounted() {
    // if (navigator.onLine) {
    //   alert('正常工作')
    // } else {
    //   alert('不在线')
    // }
    // window.addEventListener('online', function () {
    //   store.commit.networkNotify(true)
    //   alert('正常工作')
    // })

    // window.addEventListener('offline', function () {
    //   store.commit.networkNotify(false)
    //   alert('不在线')
    // })
    window.addEventListener('online', updateOnlineStatus)
    window.addEventListener('offline', updateOnlineStatus)
    function updateOnlineStatus(event) {
      console.log('-----------------Control comes into updateOnlineStatus --------------')
      console.log('event', event)
      var condition = navigator.onLine ? 'online' : 'offline'
      if (condition == 'online') {
        console.log('-----------INternet Is conected ----------------')
        alert('正常工作')
      } else {
        console.log('-----------INternet Is NOOOOOOTT conected ----------------')
        alert('不在线')
      }
    }
  },
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
