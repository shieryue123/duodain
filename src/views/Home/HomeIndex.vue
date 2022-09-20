<template>
  <div class="main">
    <home-header/>
    <home-banner :banner="banner"/>
    <home-mull :mull_nav="mull_nav"/>
    <home-today/>
    <div :ref="'conts'">
      <home-hot :hot_nav="hot_nav" @change="change"/>
      <el-list :list="product" />
    </div>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeMull from './components/HomeMull.vue'
import HomeToday from './components/HomeToday.vue'
import HomeHot from './components/HomeHot.vue'
import scroll from '@/mixins/scroll.js'
export default {
  mixins: [scroll],
  components: {
    HomeBanner,
    HomeHeader,
    HomeMull,
    HomeToday,
    HomeHot
  },
  data () {
    return {
      banner: [],
      mull_nav: [],
      hot_nav: [],
      product: [],
      initCommodityObject: {
        page: 1,
        page_size: 5,
        id: 125
      }
    }
  },
  created () {
    this.initBannerList()
    this.initCommodityList()
  },
  scrollBottom () {
    this.initCommodityObject.page += 1
  },
  methods: {
    initBannerList () {
      this.$api.home.base().then(res => {
        this.banner = res.data.data.banner
        this.mull_nav = res.data.data.mull_nav
        this.hot_nav = res.data.data.hot_nav
      })
    },
    async initCommodityList () {
      const res = await this.$api.product.list(this.initCommodityObject)
      if (this.initCommodityObject.page === 1) {
        this.product = res.data.product
      } else {
        this.product = this.product.concat(res.data.product)
      }
    },
    change (index, value) {
      this.initCommodityObject.page = 1
      this.initCommodityObject.id = value
      const top = this.$refs.conts.offsetTop
      const scrollTop = document.querySelector('html').scrollTop
      if (scrollTop > top) {
        window.scrollTo(0, top)
      }
    }
  },
  watch: {
    initCommodityObject: {
      handler: 'initCommodityList',
      deep: true,
      immediate: true
    }
  }
}
</script>

<style lang="scss" scoped>
.main{
  margin-bottom:98px;
}
</style>
