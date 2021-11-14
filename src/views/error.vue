<!--
 * @Description:
 * @Author: shufei
 * @Date: 2021-11-13 20:36:01
 * @LastEditTime: 2021-11-14 14:36:06
 * @LastEditors: shufei
-->
<!--
 * @Description:
 * @Author: shufei
 * @Date: 2021-11-04 09:50:04
 * @LastEditTime: 2021-11-14 00:15:28
 * @LastEditors: shufei
-->
<template>
  <div class="container">
    <State></State>
  </div>
</template>

<script>
import { State } from '@/components'
export default {
  name: 'Error',
  components: { State },
  data () {
    return {

    }
  },
  created () {

  },
  mounted () {
    // console.log(this.$api)
    // this.showloading()
    // console.log(this.$route.query, '99999')
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.container{
  width: 100%;
  height: 100%;
}
</style>
