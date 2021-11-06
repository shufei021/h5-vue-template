<!--
 * @Description:
 * @Author: shufei
 * @Date: 2021-11-04 12:46:29
 * @LastEditTime: 2021-11-04 18:35:39
 * @LastEditors: shufei
-->
<template>
  <div>
    <h1 @click="handler">Cart 组件</h1>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data () {
    return {}
  },
  methods: {
    handler () {
      alert(111)
    }
  }
}
</script>
