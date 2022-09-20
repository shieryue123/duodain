<template>
  <div class="banner">
    <swiper :pagination="{ clickable: true }" :options="swiperOption">
      <swiper-slide v-for="item in banner" :key="item.id">
        <img :src="item.image"/>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        // 显示分页
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        // 允许分页点击跳转
        }
      }
    }
  },
  props: {
    banner: Array
  }
}
</script>

<style lang="scss" scoped>
.banner{
  width:100%;
  img{
    @include wh(100%,auto)
  }
  ::v-deep .swiper-pagination span{
    width:16px;
    height:16px;
  }
}
</style>
