<template>
  <div class="daliy-new">
    <div class="title">
      <h3>限时活动</h3>
    </div>
    <el-row>
      <el-col v-for="(i) in 5" :key="i" :span="4" :offset=" i>1?1:0">
        <el-card :body-style="{padding:'0px',height:'180px'}">
          <div class="intro">
            <h4>嘿嘿</h4>
            <span>你看起来很好吃</span>
          </div>
          <el-image
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          ></el-image>
          
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.el-card {
  margin-top: 14px;
}
.daliy-new {
  margin-top: 20px;
}
.title {
  text-align: left;
}
.image {
  width: 100%;
}
.intro {
  z-index: 2;
  position: absolute;
  margin-top: 120px;
  margin-left: 14px;
  color: #fff;
  text-align: left;
  line-height: 24px;
  font-size: 14px;
}
</style>