<!--
 * @Description: Pic svg、img、iconfont 文档
 * @Author: shufe
 * @Date: 2021-11-12 10:19:30
 * @LastEditTime: 2021-11-12 20:01:21
 * @LastEditors: shufei
-->
<template>
  <div>
    <van-divider>svg、img、iconfont 使用说明</van-divider>
    <div class="card">
      <div class="title">在哪里添加我的 <code style="color:red">svg、img、iconfont</code> ？</div>
      <div class="desc">
        svg  <code style="color:red">src/assets/icons</code><br>
        img  <code style="color:red">src/assets/images</code><br>
        iconfont  <code style="color:red">src/assets/iconFont</code>
      </div>
    </div>
    <div class="card">
      <div class="title">如何使用 <code style="color:red">svg、img、iconfont</code> ？</div>
      <div class="desc" style="padding:0!important">
        <van-collapse v-model="activeNames">
          <van-collapse-item title="svg 使用" name="1">
            <div style="color: rgb(212, 212, 212); font-family: Consolas, &quot;Courier New&quot;, monospace; font-size: 14px; white-space: pre;"><div style="font-size: 16px; line-height: 22px;"><span style="color: #808080;">&lt;</span><span style="color: #569cd6;">svg-icon</span> :<span style="color: #9cdcfe;">icon-class</span>="<span style="color: #9cdcfe;">svgName</span>" /<span style="color: #808080;">&gt;</span></div></div>
          </van-collapse-item>
          <van-collapse-item title="img 使用" name="2">
            <div style="color: rgb(212, 212, 212); background-color: rgb(30, 30, 30); font-family: Consolas, &quot;Courier New&quot;, monospace; font-size: 16px; line-height: 22px; white-space: pre;"><div><span style="color: #808080;">&lt;</span><span style="color: #569cd6;">template</span><span style="color: #808080;">&gt;</span></div><div>&nbsp; <span style="color: #808080;">&lt;</span><span style="color: #569cd6;">div</span> <span style="color: #9cdcfe;">class</span>=<span style="color: #ce9178;">"container"</span><span style="color: #808080;">&gt;</span></div><div>&nbsp; &nbsp; <span style="color: #808080;">&lt;</span><span style="color: #569cd6;">img</span> :<span style="color: rgb(156, 220, 254);">src</span>="<span style="color: rgb(156, 220, 254);">csImg</span>" <span style="color: rgb(156, 220, 254);">style</span>=<span style="color: rgb(206, 145, 120);">"width:100%"</span><span style="color: rgb(128, 128, 128);">&gt;</span></div><div>&nbsp; <span style="color: #808080;">&lt;/</span><span style="color: #569cd6;">div</span><span style="color: #808080;">&gt;</span></div><div><span style="color: #808080;">&lt;/</span><span style="color: #569cd6;">template</span><span style="color: #808080;">&gt;</span></div><div><span style="color: #808080;">&lt;</span><span style="color: #569cd6;">script</span><span style="color: #808080;">&gt;</span></div><div><span style="color: #c586c0;">import</span> <span style="color: rgb(156, 220, 254);">csImg</span> <span style="color: rgb(197, 134, 192);">from</span> <span style="color: rgb(206, 145, 120);">'</span><span style="color: rgb(206, 145, 120);">images</span><span style="color: rgb(206, 145, 120);">/cs.jpg'</span><br></div><div><span style="color: #c586c0;">export</span> <span style="color: #c586c0;">default</span> {</div><div>&nbsp; <span style="color: #dcdcaa;">data</span> () {</div><div>&nbsp; &nbsp; <span style="color: #c586c0;">return</span> {</div><div>&nbsp; &nbsp; &nbsp; <span style="color: #9cdcfe;">csImg</span></div><div>&nbsp; &nbsp; }</div><div>&nbsp; }</div><div>}</div><div><span style="color: #808080;">&lt;/</span><span style="color: #569cd6;">script</span><span style="color: #808080;">&gt;</span></div></div>
          </van-collapse-item>
          <van-collapse-item title="iconfont 使用" name="3">
            <van-icon class="iconfont" class-prefix="icon" name="shouji" size="40px" :color="$utils.randomHexColorCode()" />
            <div style="color: rgb(212, 212, 212); background-color: rgb(30, 30, 30); font-family: Consolas, &quot;Courier New&quot;, monospace; font-size: 16px; line-height: 22px; white-space: pre;"><span style="color: #808080;">&lt;</span><span style="color: #569cd6;">van-icon</span> </div><div style="color: rgb(212, 212, 212); background-color: rgb(30, 30, 30); font-family: Consolas, &quot;Courier New&quot;, monospace; font-size: 16px; line-height: 22px; white-space: pre;"><span style="color: #9cdcfe;">  class</span>=<span style="color: #ce9178;">"iconfont"</span> </div><div style="color: rgb(212, 212, 212); background-color: rgb(30, 30, 30); font-family: Consolas, &quot;Courier New&quot;, monospace; font-size: 16px; line-height: 22px; white-space: pre;"><span style="color: #9cdcfe;">  class-prefix</span>=<span style="color: #ce9178;">"icon"</span> </div><div style="color: rgb(212, 212, 212); background-color: rgb(30, 30, 30); font-family: Consolas, &quot;Courier New&quot;, monospace; font-size: 16px; line-height: 22px; white-space: pre;"><span style="color: #9cdcfe;">  name</span>=<span style="color: #ce9178;">"shouji"</span> </div><div style="color: rgb(212, 212, 212); background-color: rgb(30, 30, 30); font-family: Consolas, &quot;Courier New&quot;, monospace; font-size: 16px; line-height: 22px; white-space: pre;"><span style="color: #9cdcfe;">  size</span>=<span style="color: #ce9178;">"40px"</span> /<span style="color: rgb(128, 128, 128);">&gt;</span></div>
          </van-collapse-item>
        </van-collapse>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pic',
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
