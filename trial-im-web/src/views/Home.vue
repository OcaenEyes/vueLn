<template>
  <div class="home">
    <el-container class="main-window">
      <el-aside class="ocimaside" width="68px"
        ><OCIMAside></OCIMAside
      ></el-aside>
      <el-aside class="msglist" width="160px"
        ><MsgListAside></MsgListAside
      ></el-aside>
      <el-container>
        <el-header class="msgwindowtitle">
          <MsgWindowTitle></MsgWindowTitle>
        </el-header>
        <el-main><MsgWindow></MsgWindow></el-main>
        <el-footer class="sendtool"><SendTool></SendTool></el-footer>
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
  max-height: 800px;
  border-right: 1px solid #eee;
}
.msgwindowtitle {
  background-color: #f4f4f4;
  color: rgb(0, 0, 0);
  text-align: left;
  line-height: 56px;
  height: 56px;
  border-bottom: 1px solid #eee;
}
.el-footer {
  background-color: #eee;
  color: #333;
  text-align: center;
  height: 100px !important;
  padding: 0;
}
.ocimaside {
  background-color: #333;
  color: #fff;
}
.msglist {
  background-color: #eee;
  color: #333;
}
.el-main {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  overflow-y: auto;
}
.el-main::-webkit-scrollbar {
  display: none;
}
</style>
