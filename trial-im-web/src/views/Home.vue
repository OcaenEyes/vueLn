<template>
  <div class="home">
    <el-container class="main-window">
      <el-aside width="80px"><OCIMAside></OCIMAside></el-aside>
      <el-aside width="200px"><MsgListAside></MsgListAside></el-aside>
      <el-container>
        <el-header>
          <MsgWindowTitle></MsgWindowTitle>
        </el-header>
        <el-main><MsgWindow></MsgWindow></el-main>
        <el-footer><SendTool></SendTool></el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import MsgWindowTitle from "../components/head/MsgWindowTitle";
import MsgWindow from "../components/main/MsgWindow";
import SendTool from "../components/foot/SendTools";
import MsgListAside from "../components/aside/MsgListAside";
import OCIMAside from "../components/aside/OCIMAside";

export default {
  name: "Home",
  components: {
    MsgWindowTitle,
    MsgWindow,
    SendTool,
    MsgListAside,
    OCIMAside,
  },
};
</script>

<style scoped>
.home {
  margin-top: calc(1%);
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.main-window {
  max-width: 66%;
  min-height: 600px;
  max-height: 600px;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
