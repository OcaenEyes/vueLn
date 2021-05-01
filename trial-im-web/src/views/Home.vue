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
    };
  },
  methods: {
    getHeight() {
      this.viewheight = window.innerHeight - 120 + "px";
      console.log(this.viewheight);
    },
    getMsgs() {
      const _this = this;
      console.log(JSON.parse(sessionStorage.getItem("myUserInfo")));
      var myuserinfo;
      myuserinfo = JSON.parse(sessionStorage.getItem("myUserInfo"));
      this.axios
        .get("http://127.0.01:8081/getChat", {
          params: {
            userId: myuserinfo.userId,
          },
        })
        .then(function (res) {
          console.log(res.data);
          if (res.data.resCode == "0000") {
            sessionStorage.setItem(
              "chatInfos",
              JSON.stringify(res.data.chatInfos)
            );
          } else {
            _this.$notify({
              title: "通知",
              message: res.resMsg,
              type: "error",
            });
          }
        });
    },

    getFriends() {
      const _this = this;
      var myuserinfo;
      myuserinfo = JSON.parse(sessionStorage.getItem("myUserInfo"));
      this.axios
        .get("http://127.0.01:8081/getFriends", {
          params: {
            userId: myuserinfo.userId,
          },
        })
        .then(function (res) {
          console.log(res.data);
          if (res.data.resCode == "0000") {
            sessionStorage.setItem("friends", JSON.stringify(res.data.friends));
          } else {
            _this.$notify({
              title: "通知",
              message: res.resMsg,
              type: "error",
            });
          }
        })
        .catch((error) => console.log(error));
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
