<!--
 * @Description:
 * @Author: shufei
 * @Date: 2021-11-08 16:53:07
 * @LastEditTime: 2021-11-17 13:49:46
 * @LastEditors: shufei
-->
<template>
  <div class="container">
    <ul>
      <li v-for="(img,index) in list" :key="index">
        <img v-lazy="img.src"/>
      </li>
    </ul>
  </div>
</template>

<script>
const imgs = ['https://img1.baidu.com/it/u=3918163337,3583154734&fm=26&fmt=auto', 'https://img0.baidu.com/it/u=3927459320,2138990686&fm=26&fmt=auto', 'https://img0.baidu.com/it/u=718992953,2550828756&fm=26&fmt=auto', 'https://img2.baidu.com/it/u=3642339878,2140733972&fm=26&fmt=auto', 'https://img1.baidu.com/it/u=3342704351,3405904760&fm=26&fmt=auto', 'https://img0.baidu.com/it/u=13255978,3987556015&fm=26&fmt=auto', 'https://img2.baidu.com/it/u=1519358925,3330107491&fm=26&fmt=auto', 'https://img1.baidu.com/it/u=1811766609,3285985740&fm=26&fmt=auto', 'https://img1.baidu.com/it/u=2342453063,3724550530&fm=26&fmt=auto', 'https://img2.baidu.com/it/u=2260303532,2183863165&fm=26&fmt=auto', 'https://img0.baidu.com/it/u=527192726,323612763&fm=26&fmt=auto', 'https://img1.baidu.com/it/u=1719063513,2559625643&fm=26&fmt=auto', 'https://img0.baidu.com/it/u=2706358704,1110946732&fm=26&fmt=auto', 'https://img2.baidu.com/it/u=3101796271,719628680&fm=26&fmt=auto', 'https://img2.baidu.com/it/u=1558944015,1677859960&fm=26&fmt=auto', 'https://img1.baidu.com/it/u=593629569,3400129487&fm=26&fmt=auto', 'https://img0.baidu.com/it/u=3436810468,4123553368&fm=26&fmt=auto', 'https://img0.baidu.com/it/u=1868816884,3782068186&fm=26&fmt=auto', 'https://img2.baidu.com/it/u=781607565,66374776&fm=26&fmt=auto', 'https://img1.baidu.com/it/u=349989862,1300797260&fm=26&fmt=auto', 'https://img2.baidu.com/it/u=2138674140,1750993725&fm=26&fmt=auto', 'https://img2.baidu.com/it/u=586607866,2734281005&fm=26&fmt=auto', 'https://img1.baidu.com/it/u=59331391,2887832587&fm=26&fmt=auto', 'https://img1.baidu.com/it/u=1765931792,207621960&fm=26&fmt=auto', 'https://img2.baidu.com/it/u=2260303532,2183863165&fm=26&fmt=auto', 'https://img2.baidu.com/it/u=1974206649,3691483036&fm=26&fmt=auto', 'https://img1.baidu.com/it/u=2769276717,331481455&fm=26&fmt=auto', 'https://img0.baidu.com/it/u=3819577878,1506430096&fm=26&fmt=auto', 'https://img1.baidu.com/it/u=1540999725,4290699218&fm=26&fmt=auto', 'https://img0.baidu.com/it/u=1923661580,2632176864&fm=26&fmt=auto']
const images = ['https://img2.baidu.com/it/u=2922349317,1351272931&fm=26&fmt=auto', 'https://img0.baidu.com/it/u=2471999871,2197976952&fm=26&fmt=auto', 'https://img1.baidu.com/it/u=3156083143,133333824&fm=26&fmt=auto', 'https://img1.baidu.com/it/u=3044261220,3500389775&fm=26&fmt=auto', 'https://img0.baidu.com/it/u=1371113496,4161662645&fm=26&fmt=auto', 'https://img1.baidu.com/it/u=1661918721,1477883581&fm=26&fmt=auto', 'https://img0.baidu.com/it/u=2027992389,3130985476&fm=26&fmt=auto', 'https://img2.baidu.com/it/u=3319045030,1824020173&fm=26&fmt=auto', 'https://img1.baidu.com/it/u=422805445,4118443431&fm=26&fmt=auto', 'https://img0.baidu.com/it/u=1058456637,3546107235&fm=26&fmt=auto', 'https://img1.baidu.com/it/u=1339100065,3540809536&fm=26&fmt=auto', 'https://img1.baidu.com/it/u=1347002459,3880655965&fm=26&fmt=auto', 'https://img1.baidu.com/it/u=898097444,2179824497&fm=26&fmt=auto', 'https://img1.baidu.com/it/u=2784663868,2334020525&fm=26&fmt=auto', 'https://img0.baidu.com/it/u=339849272,3567902899&fm=26&fmt=auto', 'https://img0.baidu.com/it/u=1138104830,403115489&fm=26&fmt=auto', 'https://img1.baidu.com/it/u=3332186388,3918653127&fm=26&fmt=auto', 'https://img0.baidu.com/it/u=1210230456,1857836293&fm=26&fmt=auto', 'https://img0.baidu.com/it/u=3351598694,120982613&fm=26&fmt=auto', 'https://img0.baidu.com/it/u=2659757900,3183505953&fm=26&fmt=auto', 'https://img0.baidu.com/it/u=3565716369,2401249996&fm=26&fmt=auto', 'https://img1.baidu.com/it/u=1502305954,556510673&fm=26&fmt=auto', 'https://img0.baidu.com/it/u=853749663,1494330542&fm=26&fmt=auto', 'https://img2.baidu.com/it/u=38814742,1761986327&fm=26&fmt=auto', 'https://img0.baidu.com/it/u=3928357510,1521631373&fm=26&fmt=auto', 'https://img2.baidu.com/it/u=2130615794,142753515&fm=26&fmt=auto', 'https://img0.baidu.com/it/u=3469615800,148628891&fm=26&fmt=auto', 'https://img2.baidu.com/it/u=2216705982,1445569845&fm=26&fmt=auto', 'https://img2.baidu.com/it/u=1881182452,3230762371&fm=26&fmt=auto', 'https://img0.baidu.com/it/u=3448760370,3948323533&fm=26&fmt=auto']
const is = Math.random() > 0.5
const img = is ? imgs : images
export default {
  name: 'LazyloadDemo',
  data () {
    return {
      list: Array.from({ length: 30 }, (_, i) => ({ src: i % 2 ? img[i] : img[i] + this.$utils.guid() }))
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

<style scoped lang="scss">
.container{
  width: 100%;
  ul{
    width: 100%;
    li{
      width: 100%;
      overflow: hidden;
      img{
        width: 100%;
        vertical-align: top;
      }
    }
  }
}
</style>
