<template>
  <div class="home">
    <div style="width:80%;margin-left:10%">
      <el-carousel :interval="4000" type="card" height="200px" >
        <el-carousel-item v-for="(item,index) in 6" :key="index">
          <h3>{{item}}</h3>
        </el-carousel-item>
      </el-carousel>
      <div style="height:36px"></div>
      <el-row :gutter="12">
        <el-col :span="12">
          <el-card shadow="hover">主页
            <router-link to="/index">跳转主页</router-link>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card shadow="hover">Admin后台
            <router-link to="/admin">跳转admin</router-link>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {}
};
</script>
