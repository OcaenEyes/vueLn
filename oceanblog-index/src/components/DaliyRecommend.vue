<template>
  <div class="daliy-recommend">
    <div class="title">
      <h3>每日推荐</h3>
    </div>
    <el-row>
      <el-col v-for="(i) in 5" :key="i" :span="4" :offset=" i>1?1:0">
        <el-card :body-style="{padding:'0px'}">
          <el-image src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image"></el-image>
          
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.el-card{
  margin-top: 14px;
}
.daliy-recommend{
    margin-top: 20px;
}
.title {
  text-align: left;
}
.image{
  width: 100%;
}
</style>