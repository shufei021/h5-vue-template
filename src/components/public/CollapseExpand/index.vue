<!--
 * @Description: 收起展开组件
 * @Author: shufei
 * @Date: 2021-11-09 16:13:43
 * @LastEditTime: 2021-11-12 09:31:39
 * @LastEditors: shufei
-->
<template>
  <div class="collapse-expand" :class="[selfClassWrap]">
    <div class="wrapper">
      <input :id="id" class="exp" :class="{'dispaly-none':onlyUnfold}" type="checkbox" />
      <div class="text">
        <label class="btn" :for="id"></label>
        {{ content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollapseExpand',
  props: {
    content: {
      type: String,
      default: ''
    },
    fontSize: {
      type: [Number, String],
      default: 14
    },
    line: {
      type: [Number, String],
      default: 2
    },
    onlyUnfold: Boolean
  },
  data () {
    return {
      id: 'collapse-expand' + this.$utils.guid(),
      selfClassWrap: 'collapse-expand-self' + this.$utils.guid()
    }
  },
  mounted () {
    const container = document.querySelector('.' + this.selfClassWrap)
    container.style.setProperty('--globalFontSize', this.fontSize + 'px')
    container.style.setProperty('--line', this.line)
  }
}
</script>
<style lang="less" scoped>
.collapse-expand{
  /* text 字体大小*/
  --globalFontSize: 14px;
  /* btn 字体大小*/
  --btnFontSize: var(--globalFontSize);
  /* btn 高度*/
  --textHeight: calc(100% - var(--globalFontSize) - 6px);
  /* 多少行超出*/
  --line: 2;
  background-color: #fff;
  .wrapper {
        display: flex;
        margin: 0 auto;
        width: 100%;
        overflow: hidden;
        border-radius: 8px;
        padding: 15px;
        box-shadow: 20px 20px 60px #ffffff, -20px -20px 60px #ffffff;
        box-sizing: border-box;
    }
    .text {
        font-size: var(--globalFontSize);
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: justify;
        position: relative;
        line-height: 1.5;
        max-height:calc( var(--line) * 1.5em );
        transition: 0.3s max-height;
        background-color: #fff;
    }
    .text::before {
        content: '';
        height: var(--textHeight);
        float: right;
    }
    .text::after {
        content: '';
        width: 999vw;
        height: 999vw;
        position: absolute;
        box-shadow: inset calc(100px - 999vw) calc(30px - 999vw) 0 0 #fff;
        margin-left: -100px;
    }
    .btn {
        position: relative;
        float: right;
        clear: both;
        margin-left: 20px;
        font-size: var(--btnFontSize) !important;
        // padding: 0 8px;
        // background: #3f51b5;
        // line-height: 24px;
        // border-radius: 4px;
        color: #1890ff;
        cursor: pointer;
        background-color: #fff;
    /* margin-top: -30px; */
    }
    .btn::after {
        content: '展开';
    }
    .exp {
        display: none;
    }
    .exp:checked + .text {
        max-height: none;
    }
    .exp:checked + .text::after {
        visibility: hidden;
    }
    .exp:checked + .text .btn::before {
        visibility: hidden;
    }
    .exp:checked + .text .btn::after {
        content: '收起';
    }
    .btn::before {
        content: '...';
        position: absolute;
        left: -5px;
        color: #333;
        transform: translateX(-100%);
    }
    .dispaly-none:checked + .text .btn {
        display: none;
    }
}
</style>
