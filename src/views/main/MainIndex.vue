<template>
  <div id="wrap">
    <router-view />
    <nav class="footer">
      <router-link :to="item.url" v-for="(item, index) in nav" :key="index" active-class="active">
        <img :src="item.icon" alt="" class="icon">
        <img :src="item.icon_select" alt="" class="icon-select">
        <span>{{item.text}}</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nav: [
        {
          url: '/home',
          text: '首页',
          icon: require('../../assets/image/home.png'),
          icon_select: require('../../assets/image/home-select.png')
        },
        {
          url: '/classify',
          text: '分类',
          icon: require('../../assets/image/classify.png'),
          icon_select: require('../../assets/image/classify-select.png')
        },
        {
          url: '/shop',
          text: '购物车',
          icon: require('../../assets/image/cart.png'),
          icon_select: require('../../assets/image/cart-select.png')
        },
        {
          url: '/over',
          text: '我的',
          icon: require('../../assets/image/mine.png'),
          icon_select: require('../../assets/image/mine-select.png')
        }
      ],
      classActive: 0
    }
  },
  methods: {
    Active (i) {
      this.classActive = i
    }
  }
}
</script>

<style lang="scss" scoped>
#wrap{
  width:100%;
  height:100%;
  .footer{
    width:100%;
    height:98px;
    display: flex;
    align-items: center;
    position: fixed;
    bottom:0;
    border-top:1px solid #ebebeb;
    background: #fff;
    a{
      flex:1;
      display: flex;
      flex-direction: column;
      align-items: center;
      img{
        width:52px;
      }
      .icon-select{
        display: none;
      }
      span{
        font-size: 28px;
        color:#666;
      }
      &.active{
        .icon{
          display: none;
        }
        .icon-select{
          display: block;
        }
        span{
          font-size: 28px;
          color:#f13113;
        }
      }
    }
  }
}
</style>
