<template>
  <div class="home">
    <el-container class="main-window" :style="{ height: viewheight }">
      <el-aside class="ocimaside" width="68px"
        ><OCIMAside></OCIMAside
      ></el-aside>
      <router-view></router-view>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import OCIMAside from "../components/OCIMAside";
// import MsgView from '../views/MsgView.vue'

export default {
  name: "Home",
  components: {
    OCIMAside,
    // MsgView,
  },
  data() {
    return {
      viewheight: "",
      timeout: 3000,
    };
  },
  methods: {
    getHeight() {
      this.viewheight = window.innerHeight - 120 + "px";
      console.log(this.viewheight);
    },
    getHeatTest() {
      var connectMsg = {};
      connectMsg = {
        action: "0",
        message: {
          senderId: this.myUserInfo.userId,
        },
        extend: "",
      };
      setTimeout(() => {
        this.$ocSockApi.sendSocket(connectMsg, function () {});
      }, this.timeout);
    },
  },
  created() {
    window.addEventListener("resize", this.getHeight);
    this.getHeight();
  },
};
</script>

<style scoped>
.home {
  margin-top: calc(3%);
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-width: 980px;
}
.main-window {
  max-width: 66%;

  /* min-height: 600px; */
  /* max-height: 600px; */
  border-right: 0.1px solid #eee;
}
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
/* .msglisttool::-webkit-scrollbar{
  display: none;
} */
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
