<template>
  <el-container>
    <el-header class="friendwindowtitle">
      <!-- <friendWindowTitle></friendWindowTitle> -->
    </el-header>
    <el-main>
      <div>朋友</div>
    </el-main>
    <el-footer class="sendtool">
      <div>朋友</div>
    </el-footer>
  </el-container>
</template>

<script>
export default {};
</script>

<style scoped>
.el-main {
  background-color: #f4f4f4;
  color: #333;
  text-align: center;
  overflow-y: auto;
  border-left: 0.1px solid #eee;
}
.el-main::-webkit-scrollbar {
  display: none;
}
.friendwindowtitle {
  background-color: #fff;
  color: rgb(0, 0, 0);
  text-align: left;
  line-height: 56px;
  height: 56px;
  border-bottom: 0.1px solid #eee;
  /* border-left: 0.1px solid #eee; */
  /* border-top: 0.1px solid #eee; */
}
</style>