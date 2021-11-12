<!--
 * @Description: api 文档
 * @Author: shufei
 * @Date: 2021-11-12 10:19:30
 * @LastEditTime: 2021-11-12 12:21:53
 * @LastEditors: shufei
-->
<template>
  <div>
    <van-divider>api 使用说明</van-divider>
    <div class="card">
      <div class="title">在哪里编写我的 <code style="color:red">api</code> ？</div>
      <div class="desc">在 <code style="color:red">src/api/modules</code> 里面创建功能模块文件夹，功能模块文件夹 再创建 该功能模块的 <code style="color:red">api</code>文件</div>
    </div>
    <div class="card">
      <div class="title">如何使用我写的 <code style="color:red">api</code> 接口？</div>
      <div class="desc">在vue的组件示例里，直接通过  <code style="color:red">this.$api.功能模块名.具体api名</code> 使用</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Api',
  data () {
    return {
    }
  },
  created () {

  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style scoped lang="less">
.card{
  background-color: #fff;
  margin-bottom: 10px;
  .title{
    font-size: 18px;
    line-height: 20px;
    color: #323233;
    padding: 15px 10px;
  }
  .desc{
    font-size: 14px;
    background-color: #fafafa;
    padding: 15px;
    color:#323233;
    line-height: 24px;
  }
}
</style>
