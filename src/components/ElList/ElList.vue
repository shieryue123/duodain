<template>
  <div class="el-list">
    <dl v-for="(item, index) in list" :key="index">
      <dt><img :src="item.img" alt=""></dt>
      <dd>
        <header>
          <h3>{{item.namea}}</h3>
          <p>累计{{15000 | numberFormat}}万份 / 已拼{{14000 | numberFormat}}份</p>
          <div class="tag">
            <span>自营</span>
            <span>团购</span>
          </div>
        </header>
        <footer>
          <div class="right">
            <p>￥<b>{{item.price | numberPaice}}</b></p>
            <p><s>￥{{item.price | numberPaice}}</s></p>
          </div>
          <div class="left">
            <img :src="require('@/assets/image/cart.png')" alt="">
          </div>
        </footer>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: {
    list: Array
  },
  mounted () {
    console.log(this.list)
  },
  filters: {
    numberFormat: function (value) {
      let unit = ''
      const k = 10000
      const sizes = ['', '万', '亿', '万亿']
      let i
      if (value < k) {
        i = value
        value = i
      } else {
        i = Math.floor(Math.log(value) / Math.log(k))
        value = ((value / Math.pow(k, i))).toFixed(1)
        unit = sizes[i]
      }
      return value + unit
    },
    numberPaice: function (value) {
      return (value / 100).toFixed(1)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-list{
  @include wh(100%, auto);
  dl{
    @include wh(100%,300px);
    display: flex;
    padding:30px;
    box-sizing: border-box;
    border-top:1px solid $color-border;
    dt{
      @include wh(240px, 240px);
      img{
        @include wh(240px, 240px);
      }
    }
    dd{
      margin-left: 30px;
      display: flex;
      flex-direction: column;
      height:100%;
      justify-content: space-between;
      header{
        h3{
          @include ellipsis(2);
          font-size: 32px;
          color:#111;
          line-height: 42px;
        }
        p{
          font-size: 24px;
          color:#999;
          line-height: 36px;
        }
        .tag{
          font-size: 0;
          span{
            display: inline-block;
            font-size: 20px;
            width:60px;
            height: 26px;
            color:#fff;
            border-radius: 16.5px;
            text-align: center;
            background: linear-gradient(90deg,#FE3113, #FD7A00)
          }
        }
      }
      footer{
        width:100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .right{
          display: flex;
          align-items: center;
          p{
            font-size: 24px;
            color:$color-link-base;
            b{
              font-size: 36px;
            }
          }
          s{
            font-size: 20px;
            color:$color-text-grey;
          }
        }
        .left{
          @include wh(66px, 63px);
          border-radius: 100%;
          background: $color-link-base;
          display: flex;
          justify-content: center;
          align-items: center;
          img{
            @include wh(45px, 45px);
          }
        }
      }
    }
  }
}
</style>
