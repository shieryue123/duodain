<template>
  <div class="home-hot">
    <a href="javascript:;"
      v-for="(item, index) in hot_nav"
      :key="item.id"
      @click="HotActive(index, item.path)"
      :class="clickActive === index? 'active' : ''"
      >{{item.text}}</a>
  </div>
</template>

<script>
export default {
  props: {
    hot_nav: Array
  },
  data () {
    return {
      clickActive: 0
    }
  },
  methods: {
    HotActive (i, myid) {
      this.clickActive = i
      this.$emit('change', i, myid)
    }
  }
}
</script>

<style lang="scss" scoped>
.home-hot{
  width:100%;
  padding: 30px 0;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(6, auto);
  justify-content: space-around;
  align-items: center;
  position: sticky;
  top:0;
  z-index: 999;
  background: #fff;
  a{
    font-size: 28px;
    color: #4A4A4A;
    &.active{
      font-size: 32px;
      color:#FE3113;
      font-weight: bold;
    }
  }
}
</style>
