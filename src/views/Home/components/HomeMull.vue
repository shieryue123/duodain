<template>
  <div class="home-mull">
    <swiper class="swiper">
      <swiper-slide v-for="(item, index) in Math.ceil(mull_nav.length / 10)" :key="index">
        <a href="javascript:;" v-for="(unitem, unindex) in mull_nav.slice(index * 10 , index * 10 + 10)" :key="unindex" class=logo>
          <img :src="unitem.image" alt="">
          <span>{{unitem.title}}</span>
        </a>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  props: {
    mull_nav: Array
  }
}
</script>

<style lang="scss" scoped>
.home-mull{
  @include wh(100%,312px);
  .swiper{
    .swiper-slide{
      display: grid;
      grid-template-columns: repeat(5, 20%);
      grid-template-rows: repeat(2, 156px);
      justify-items: center;
        a{
          color:$color-grey;
          display: grid;
          align-content: space-evenly;
          justify-items: center;
        img{
          @include wh(74px, 74px)
        }
        span{
          font-size: 24px;
        }
      }
    }
  }
}
</style>
