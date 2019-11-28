<template>
<div>
  <div style="margin-left:4%;margin-top:60px;color:#606266;line-height:1.5;">
  <div style="font-size:32px;font-weight:blod;margin-bottom:8px;"><b><a href="#">高智勇的个人简历</a></b></div>
  <div>在未来面前，我们都是孩子；只有不断学习，才能走的更远</div>
  </div>
  <div style="height:1px;width:80%;margin-left:10%;background-color:#F2F6FC;margin-top:20px"></div>


  <el-carousel :interval="4000" type="card" height="280px" style="margin-top:28px;width:92%;margin-left:4%;">
    <el-carousel-item v-for="item in 6" :key="item">
      <!-- <h3 class="medium">{{ item }}</h3> -->
      <div><a href=""><img src="/api/media/bg.jpg" style="width:100%;height:auto;"></a></div>
    </el-carousel-item>
  </el-carousel>
</div>
</template>


<style scoped>
a{
  text-decoration: none;
  color:#606266;
}
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