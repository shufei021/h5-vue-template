<!--
 * @Description: Components说明文档
 * @Author: shufei
 * @Date: 2021-11-12 20:02:25
 * @LastEditTime: 2021-11-12 20:10:35
 * @LastEditors: shufei
-->
<template>
  <div>
    <van-divider>Components 使用说明</van-divider>
    <div class="card">
      <div class="title">在哪里添加我的 <code style="color:red">components</code> ？</div>
      <div class="desc">
        业务组件  <code style="color:red">src/assets/components/business</code><br>
        公共组件  <code style="color:red">src/assets/components/common</code><br>
        通用组件  <code style="color:red">src/assets/components/public</code> 全局注册
      </div>
    </div>
    <div class="card">
      <div class="title">如何使用？</div>
      <div class="desc" style="padding:0!important">
        <van-collapse v-model="activeNames">
          <van-collapse-item title="业务组件/公共组件 使用（按需引入）" name="1">
            <div style="color: rgb(212, 212, 212); background-color: rgb(30, 30, 30); font-family: Consolas, &quot;Courier New&quot;, monospace; font-size: 16px; line-height: 22px; white-space: pre;"><div style="line-height: 22px;"><span style="color: #c586c0;">import</span> { <span style="color: #9cdcfe;">Banner</span> } <span style="color: #c586c0;">from</span> <span style="color: #ce9178;">'@/components'</span></div></div>
          </van-collapse-item>
          <van-collapse-item title="通用组件 使用（全局注册）" name="2">
            <div style="color: rgb(212, 212, 212); background-color: rgb(30, 30, 30); font-family: Consolas, &quot;Courier New&quot;, monospace; font-size: 16px; line-height: 22px; white-space: pre;"><div><span style="color: #808080;">&lt;</span><span style="color: #569cd6;">template</span><span style="color: #808080;">&gt;</span></div><div>&nbsp; <span style="color: #808080;">&lt;</span><span style="color: #569cd6;">div</span> <span style="color: #9cdcfe;">class</span>=<span style="color: #ce9178;">"container"</span><span style="color: #808080;">&gt;</span></div><div>&nbsp; &nbsp; <span style="color: #808080;">&lt;</span><span style="color: #569cd6;">h1</span><span style="color: #808080;">&gt;</span>主页<span style="color: #808080;">&lt;/</span><span style="color: #569cd6;">h1</span><span style="color: #808080;">&gt;</span></div><div>&nbsp; &nbsp; <span style="color: #808080;">&lt;</span><span style="color: #569cd6;">van-button</span> <span style="color: #9cdcfe;">type</span>=<span style="color: #ce9178;">"primary"</span> </div><div>       @<span style="color: rgb(156, 220, 254);">click</span>="<span style="color: rgb(156, 220, 254);">show1</span>=<span style="color: rgb(86, 156, 214);">true</span>"<span style="color: rgb(128, 128, 128);">&gt;</span></div><div>       打开第一个弹层</div><div><span style="color: #808080;">    &lt;/</span><span style="color: #569cd6;">van-button</span><span style="color: #808080;">&gt;</span></div><div>&nbsp; &nbsp; <span style="color: #6a9955;">&lt;!-- 第一个弹层 --&gt;</span></div><div>&nbsp; &nbsp; <span style="color: #808080;">&lt;</span><span style="color: #569cd6;">popup-layer</span> </div><div>       :<span style="color: #9cdcfe;">visible</span>.<span style="color: #9cdcfe;">sync</span>="<span style="color: #9cdcfe;">show1</span>" </div><div>       @<span style="color: #9cdcfe;">onOpen</span>="<span style="color: #9cdcfe;">open</span>" </div><div>       @<span style="color: #9cdcfe;">onClose</span>="<span style="color: #9cdcfe;">close</span>"<span style="color: #808080;">&gt;</span></div><div>&nbsp; &nbsp; &nbsp; <span style="color: #808080;">&lt;</span><span style="color: #569cd6;">h1</span><span style="color: #808080;">&gt;</span>第一个弹层<span style="color: #808080;">&lt;/</span><span style="color: #569cd6;">h1</span><span style="color: #808080;">&gt;</span></div><div>&nbsp; &nbsp; <span style="color: #808080;">&lt;/</span><span style="color: #569cd6;">popup-layer</span><span style="color: #808080;">&gt;</span></div><div><span style="color: #808080;">&lt;/</span><span style="color: #569cd6;">template</span><span style="color: #808080;">&gt;</span></div></div>
          </van-collapse-item>
        </van-collapse>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Components',
  data () {
    return {
      activeNames: []
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
/deep/.van-collapse-item__content{
      background-color: #1e1e1e;
      padding: 5px;
}
</style>
