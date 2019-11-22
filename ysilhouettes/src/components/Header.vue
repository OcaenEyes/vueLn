<template>
<div>
  <h1>&nbsp;&nbsp;&nbsp;Resume</h1>
  <el-carousel :interval="4000" type="card" height="220px" style="margin-top:20px;width:96%;margin-left:2%;">
    <el-carousel-item v-for="item in 6" :key="item">
      <!-- <h3 class="medium">{{ item }}</h3> -->
      <div><a href="http://www.baidu.com"><img src="../assets/bg.jpg" style="width:100%;height:auto;"></a></div>
    </el-carousel-item>
  </el-carousel>
</div>
</template>


<style scoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 20px;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>

<script>
export default {
  name: "Header",
};
</script>