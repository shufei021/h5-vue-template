<!--
 * @Description: Directive 说明文档
 * @Author: shufei
 * @Date: 2021-11-12 20:12:34
 * @LastEditTime: 2021-11-12 20:21:03
 * @LastEditors: shufei
-->
<template>
  <div>
    <van-divider>directive 使用说明</van-divider>
    <div class="card">
      <div class="title">在哪里添加我的 <code style="color:red">directive</code> ？</div>
      <div class="desc">
        <code style="color:red">src/directives/components/modules</code><br>
        文件名就是指令名
      </div>
      <div>

      </div>
      <div class="card">
        <div class="title">如何使用？</div>
        <div class="desc" style="padding:0!important">
          <van-collapse v-model="activeNames">
            <van-collapse-item title="v-指令名" name="1">
              <div style="color: rgb(212, 212, 212); background-color: rgb(30, 30, 30); font-family: Consolas, &quot;Courier New&quot;, monospace; font-size: 16px; line-height: 22px; white-space: pre;"><div><span style="color: #808080;">&lt;</span><span style="color: #569cd6;">template</span><span style="color: #808080;">&gt;</span></div><div>&nbsp; <span style="color: #808080;">&lt;</span><span style="color: #569cd6;">div</span> <span style="color: #9cdcfe;">class</span>=<span style="color: #ce9178;">"container"</span><span style="color: #808080;">&gt;</span></div><div>&nbsp; &nbsp; <span style="color: #808080;">&lt;</span><span style="color: #569cd6;">van-button</span> <span style="color: #9cdcfe;">type</span>=<span style="color: #ce9178;">"primary"</span> </div><div>       @<span style="color: rgb(156, 220, 254);">click</span>="<span style="color: rgb(156, 220, 254);">show1</span>=<span style="color: rgb(86, 156, 214);">true</span>"</div><div><span style="color: rgb(128, 128, 128);">       </span><span style="color: rgb(156, 220, 254);">v-focus</span><span style="color: rgb(128, 128, 128);">&gt;</span></div><div>       按钮</div><div><span style="color: #808080;">    &lt;/</span><span style="color: #569cd6;">van-button</span><span style="color: #808080;">&gt;</span></div><div><span style="color: #808080;">&lt;/</span><span style="color: #569cd6;">template</span><span style="color: #808080;">&gt;</span></div></div>
            </van-collapse-item>
          </van-collapse>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Directive',
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
