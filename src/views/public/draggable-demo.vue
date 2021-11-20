<!--
 * @Description: draggable 拖拽排序 示例
 * @Author: shufei
 * @Date: 2021-11-20 11:41:23
 * @LastEditTime: 2021-11-20 12:47:28
 * @LastEditors: shufei
-->
<template>
  <div class="draggable">
    <van-divider :style="{ color: '#7fddad', borderColor: '#07c160', padding: '0 16px' }"><h3>vue.draggable 示例</h3></van-divider>
    <van-row>
      <van-col span="24" class="layout">{{ drag?'拖拽中':'拖拽停止' }}</van-col>
    </van-row>
    <div class="scroll">
      <!--使用draggable组件-->
      <draggable
        v-model="list"
        chosenClass="chosen"
        ghostClass="ghost"
        :scroll="true"
        forceFallback="true"
        group="people"
        animation="300"
        @start="onStart"
        @end="onEnd">
        <transition-group class="clearfix">
          <van-button type="default" class="item" v-for="element in list" :key="element.id">{{ element.name }}</van-button>
        </transition-group>
      </draggable>
    </div>
  </div>
</template>

<script>
/**
 * vue.draggable 中文文档：https://www.itxst.com/vue-draggable/2ije3a7n.html
 * vue.draggable github： https://github.com/SortableJS/Vue.Draggable
 */
import draggable from 'vuedraggable'
import { Col, Row } from 'vant'
export default {
  components: { draggable, [Col.name]: Col, [Row.name]: Row },
  props: {},
  data () {
    return {
      drag: false,
      list: Array.from({ length: 60 }, (_, i) => ({ people: 'cn', id: i + 1, name: 'cn' + (i + 1) + '.com' }))
    }
  },
  watch: {},
  computed: {},
  methods: {
    // 开始拖拽事件
    onStart () {
      this.drag = true
    },
    // 拖拽结束事件
    onEnd () {
      this.drag = false
    }
  },
  created () {},
  mounted () {}
}
</script>
<style lang="scss" scoped>
.layout{
    text-align: center;
    padding: 30px;
}
 /*被拖拽对象的样式*/
.item {
   color: #fff;
    background-color: #1989fa;
    border: 1px solid #1989fa;
    cursor: move;
    margin-bottom:5px;
    width: calc((100% - 20px) / 3);
    float: left;
    box-sizing: border-box;
}
.draggable{
    overflow: hidden;
}
.draggable .item:nth-child(3n-1){
    margin:0 10px;
}
/*选中样式*/
.chosen {
    color: #fff;
    background-color: #07c160;
    border: 1px solid #07c160;
}
/*占位样式*/
.ghost{
    color: #fff;
    background-color: #ee0a24;
    border: 1px solid #ee0a24;
}
.scroll{
    height: calc(100% - 81px - 60px);
    overflow-x: hidden;
    overflow-y: auto;
}
</style>
