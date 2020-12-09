<template>
  <el-container>
    <el-header class="msgwindowtitle">
      <MsgWindowTitle :username="username"></MsgWindowTitle>
    </el-header>
    <el-main><MsgWindow :msglists="msglists"></MsgWindow></el-main>
    <el-footer class="sendtool"><SendTool></SendTool></el-footer>
  </el-container>
</template>

<script>
import MsgWindowTitle from "./head/MsgWindowTitle";
import MsgWindow from "./main/MsgWindow";
import SendTool from "./foot/SendTools";
export default {
  props:["msglists"],
  components: {
    MsgWindowTitle,
    MsgWindow,
    SendTool,
  },
  data() {
    return {
      viewheight: "",
      username: null
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
    // console.log("创建时");
    // console.log(this.$route.params.id);
    // console.log(this.msglists);
    this.username = this.msglists[this.$route.params.id]["username"]
  },
  watch: {
    $route() {
      console.log("路由变化时");
      console.log(this.$route.params.id);
      this.username = this.msglists[this.$route.params.id]["username"];
    },
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