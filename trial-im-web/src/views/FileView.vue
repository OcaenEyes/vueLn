<template>
  <div style="display: flex; width: 100%">
    <el-container class="msglisttool"
      ><MsgListAside></MsgListAside
    ></el-container>
    <el-container>
      <el-header class="msgwindowtitle">
        <!-- <MsgWindowTitle></MsgWindowTitle> -->
      </el-header>
      <el-main>
        <div>实验室</div>
      </el-main>
      <el-footer class="sendtool">
        <div>实验室</div>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
// import MsgWindowTitle from "../components/msg/head/MsgWindowTitle";
// import MsgWindow from "../components/msg/main/MsgWindow";
// import SendTool from "../components/msg/foot/SendTools";
import MsgListAside from "../components/msg/aside/MsgListAside";
export default {
  name: "FileView",
  components: {
    // MsgWindowTitle,
    // MsgWindow,
    // SendTool,
    MsgListAside,
  },
  data() {
    return {
      viewheight: "",
    };
  },
  methods: {
    getHeight() {
      this.viewheight = window.innerHeight - 120 + "px";
      console.log(this.viewheight);
    },
  },
  created() {
    window.addEventListener("resize", this.getHeight);
    this.getHeight();
  },
};
</script>

<style scoped>
.msgwindowtitle {
  background-color: #fff;
  color: rgb(0, 0, 0);
  text-align: left;
  line-height: 56px;
  height: 56px;
  border-bottom: 0.1px solid #eee;
  border-left: 0.1px solid #eee;
  border-top: 0.1px solid #eee;
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
.msglisttool {
  /* background-color: #eee; */
  color: #333;
  border-top: 0.1px solid #eee;
  border-bottom: 0.1px solid #eee;
  max-width: 240px;
}
.msglisttool::-webkit-scrollbar {
  display: none;
}
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
</style>