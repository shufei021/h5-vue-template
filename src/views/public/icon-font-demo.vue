<!--
 * @Description: icon-font 使用
 * @Author: shufei
 * @Date: 2021-11-10 23:13:53
 * @LastEditTime: 2021-11-17 11:39:58
 * @LastEditors: shufei
-->
<template>
  <div class="container">
    <van-divider :style="{ color: '#7fddad', borderColor: '#07c160', padding: '0 16px' }"><h3>iconfont 列表大全</h3></van-divider>
    <div class="iconfont-item clearfix">
      <van-icon
        v-for="(item, index) in list"
        :key="index"
        class="iconfont"
        class-prefix="icon"
        :name="item.name"
        color="rgb(33, 195, 201)"
        @click="itemClickHander(item)"
      >
        <div class="title">{{ item.title }}</div>
      </van-icon>
    </div>
  </div>
</template>
<script>
// #[...document.querySelectorAll('.block-icon-list li')].map(i=>i.innerText) 定期抓取
const iconfontList = [
  '微信\nicon-weixin',
  'i-common-qywechat\nicon-qiyeweixin',
  '关\nicon-guan',
  '编组\nicon-bianzu1',
  '必填\nicon-bitian',
  'Combined Shape\nicon-a-CombinedShape',
  '开\nicon-kai',
  '路径\nicon-lujing',
  'toast_icon_warning@3x\nicon-a-toast_icon_warning3x',
  '组织架构\nicon-zuzhijiagou',
  '女\nicon-nv',
  '排序\nicon-paixu',
  '去巡店\nicon-quxundian',
  '筛选\nicon-shaixuan',
  '盘库\nicon-panku',
  '删除\nicon-shanchu',
  '收款\nicon-shoukuan',
  '搜索\nicon-sousuo',
  '添加关注\nicon-tianjiaguanzhu',
  '拖动\nicon-tuodong',
  '退货\nicon-tuihuo',
  '添加\nicon-tianjia',
  '写汇报\nicon-xiehuibao1',
  '形状\nicon-xingzhuang',
  '外部联系人新增\nicon-waibulianxirenxinzeng',
  '形状结合\nicon-xingzhuangjiehe',
  '修改\nicon-xiugai1',
  '修改\nicon-xiugai',
  '邀请新增\nicon-yaoqingxinzeng',
  '写汇报\nicon-xiehuibao',
  '编组\nicon-bianzu',
  '查重\nicon-chazhong',
  '查看详情\nicon-chakanxiangqing',
  '代订货\nicon-daidinghuo',
  '地图\nicon-ditu',
  '订货人\nicon-dinghuoren',
  '更多\nicon-gengduo',
  '关联客户\nicon-guanliankehu',
  '划入公共池\nicon-huarugonggongchi',
  '减去\nicon-jianqu',
  '进入\nicon-jinru',
  '关联联系人\nicon-guanlianlianxiren',
  '解除关联\nicon-jiechuguanlian',
  '连接\nicon-lianjie',
  '路线导航\nicon-luxiandaohang',
  '联系客户\nicon-lianxikehu',
  '男\nicon-nan'
]
export default {
  name: 'IconFontDemo',
  data () {
    return {
      list: iconfontList.map((i) => {
        const a = i.split('\nicon-')
        return {
          title: a[0],
          name: a[1]
        }
      }).sort((a, b) => a.title.length - b.title.length)
    }
  },
  methods: {
    itemClickHander ({ title, name }) {
      this.copyText(name)
      this.$toast(`复制 ${name} (${title}) 成功`)
    },
    copyText (text) {
      const input = document.createElement('input')
      input.value = text // 修改文本框的内容
      document.body.appendChild(input)
      input.select() // 选中文本
      document.execCommand('copy')// 执行浏览器复制命令
      document.body.removeChild(input)
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  .iconfont-item {
    background-color: #ebedf0;
    .iconfont {
      float: left;
      font-size: 30px;
      padding: 10px;
      text-align: center;
    }
    .title {
      font-size: 12px;
      text-align: center;
      padding-top: 5px;
    }
  }
}
</style>
