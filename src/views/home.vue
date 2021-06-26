<template>
  <div class="wrapper">
      <h1>主页</h1>
      <input type="text" v-focus  v-draggable>
      <Banner/>    
      <Cart/>    
  </div>
</template>

<script>
import { Banner, Cart } from '@/components'
import { group, getAttr } from '@/utils'
export default {
 name:'Home',
  components: { Banner,Cart} ,
  props: {},
  data () {
    return {
    }
  },
   mounted () {
    //  console.log(group)
    //  console.log(getAttr)
      // console.log(this.$api)
      // console.log(this.$api.getUserInfo)
      // console.log(this.$api.getUserExpired)
      // console.log(this.$api.getCartProductCategory)
      // console.log(this.$api.getCartProductCount)
   },
  watch: {},
  computed: {},
  methods: {},
  created () {}
}
</script>