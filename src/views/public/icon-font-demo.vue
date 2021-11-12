<!--
 * @Description: icon-font 使用
 * @Author: shufei
 * @Date: 2021-11-10 23:13:53
 * @LastEditTime: 2021-11-12 22:17:24
 * @LastEditors: shufei
-->
<template>
  <div class="container">
    <van-icon class="iconfont" class-prefix="icon" name="tijiao" size="40px" :color="$utils.randomHexColorCode()" />
    <van-icon class="iconfont" class-prefix="icon" name="kefu" size="40px" :color="$utils.randomHexColorCode()" />
    <van-icon class="iconfont" class-prefix="icon" name="weikaishi" size="40px" :color="$utils.randomHexColorCode()" />
  </div>
</template>
<script>
export default {
  name: 'IconFontDemo'
}
</script>
