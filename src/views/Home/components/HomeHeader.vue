<template>
  <div class="home-head">
    <div>
      <i class="iconfont icon-weizhi"></i>
      <span>送至: 山西省大同市灵丘县</span>
      <i class="iconfont icon-xiangyoujiantou"></i>
    </div>
    <i class="iconfont icon-sousuo"></i>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.home-head{
  @include wh(100%,98px);
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div{
    width:100%;
    display: flex;
    font-size: 0;
    align-items: center;
    span{
      font-size: 30px;
      color:#999;
      padding:0 10px;
    }
  }
  i{
    font-size: 32px;
  }
}
</style>
