<template>
  <div class="home-today">
    <img src="https://image1.suning.cn/uimg/cms/img/160067933058718613.png?format=is" alt="">
    <div class="pic">
      <img src="https://img.alicdn.com/imgextra/i4/O1CN01zAUGLh1xM4ghGSgwF_!!6000000006428-0-tps-536-630.jpg_960x960Q50s50.jpg_.webp" alt="">
      <img src="https://img.alicdn.com/imgextra/i4/O1CN01EhzK7v1ZPEdzbZLxP_!!6000000003186-0-tps-536-630.jpg_960x960Q50s50.jpg_.webp" alt="">
      <img src="https://img.alicdn.com/imgextra/i1/O1CN01shsi6z1xJmi3AfvKF_!!6000000006423-0-tps-536-630.jpg_960x960Q50s50.jpg_.webp" alt="">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.home-today{
  @include wh(100%,384px);
  overflow: hidden;
  >img{
    width:100%;
  }
  .pic{
    width:100%;
    img{
      width:33.3%;
    }
  }
}
</style>
