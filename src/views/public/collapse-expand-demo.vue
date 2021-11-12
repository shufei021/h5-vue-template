<!--
 * @Description: 收起展开组件示例
 * @Author: shufei
 * @Date: 2021-11-09 18:04:00
 * @LastEditTime: 2021-11-11 19:28:46
 * @LastEditors: shufei
-->
<template>
  <div class="container">
    <CollapseExpand :content="content" fontSize="14" line="1"></CollapseExpand>
    <CollapseExpand :content="content" fontSize="14" line="2" onlyUnfold></CollapseExpand>
    <CollapseExpand :content="content" fontSize="14" line="3"></CollapseExpand>
    <CollapseExpand :content="content" fontSize="14" line="4"></CollapseExpand>
    <CollapseExpand :content="content" fontSize="14" line="5"></CollapseExpand>
    <CollapseExpand :content="content" fontSize="14" line="6"></CollapseExpand>
  </div>
</template>
<script>
export default {
  name: 'CollapseExpandDemo',
  data () {
    return {
      content: `浮动元素是如何定位的 正如我们前面提到的那样，当一个元素浮动之后，它会被移出正常的文档流，然后向左或者向右平移，一直平移直到碰到了所处的容器的边框，或者碰到另外一个浮动的元素。
        在下面的图片中，有三个红色的正方形。其中有两个向左浮动，一个向右浮动。要注意到第二个向左浮动的正方形被放在`
    }
  }
}
</script>
