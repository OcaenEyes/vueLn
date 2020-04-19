<template>
  <div>
    <el-carousel :interval="5000" type="card" height="380px">
      <el-carousel-item v-for="item in 6" :key="item">
        <el-image
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class="image"
        ></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  /* line-height: 200px; */
  margin: 0;
}

.image {
  width: 100%;
}
</style>