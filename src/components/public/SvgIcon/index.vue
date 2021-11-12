<!--
 * @Description:
 * @Author: shufei
 * @Date: 2021-11-09 18:40:04
 * @LastEditTime: 2021-11-11 09:32:14
 * @LastEditors: shufei
-->
<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    iconClass: {
      type: String,
      required: true
    }
  },
  computed: {
    iconName ({ iconClass }) {
      return `#icon-${iconClass}`
    }
  }
}
</script>

<style>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
