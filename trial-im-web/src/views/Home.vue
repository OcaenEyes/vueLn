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

    getMsgs() {},

    getFriends() {
      const _this = this;
      this.axios
        .get("http://127.0.01:8081/getFriends", {
          params: {
            // id: "49ca45e7-e4fd-41f5-ae65-cf3a776cf7d2",
            id:"5fb2daad-28c1-4546-b645-9e77d759494d",
          },
        })
        .then(function (res) {
          if (res.data.friends.length >= 0) {
            localStorage.setItem("friends", JSON.stringify(res.data.friends));
            console.log(res.data.friends);
          } else {
            _this.$notify({
              title: "通知",
              message: "请求异常",
              type: "error",
            });
          }
        })
        .catch((error) => console.log(error));
    },
  },
  created() {
    // var ls =[] ;
    var lss = [];
    var friends =[];
    lss = [
      {
        id: 0,
        isgroup: true,
        groupid: 1,
        groupname: "讨论组一",
        receivename: "",
        receiveid: null,
        headimg:
          "https://up.enterdesk.com/edpic_source/42/7d/72/427d72b831d61616098dbca1488bcb3c.jpg",
        msgsumary: [
          {
            issend: true,
            username: "GZY",
            avatar:
              "https://up.enterdesk.com/edpic_source/42/7d/72/427d72b831d61616098dbca1488bcb3c.jpg",
            content: "你好呀！！！",
            timestmp: "20201202",
          },
          {
            issend: false,
            username: "厉害",
            avatar:
              "https://up.enterdesk.com/edpic_source/42/7d/72/427d72b831d61616098dbca1488bcb3c.jpg",
            content: "你好呀！！！",
            timestmp: "20201202",
          },
        ],
      },
      {
        id: 1,
        isgroup: false,
        groupid: null,
        groupname: "",
        receivename: "乔克",
        receiveid: 1,
        headimg:
          "https://up.enterdesk.com/edpic_source/42/7d/72/427d72b831d61616098dbca1488bcb3c.jpg",
        msgsumary: [
          {
            issend: true,
            username: "GZY",
            avatar:
              "https://up.enterdesk.com/edpic_source/42/7d/72/427d72b831d61616098dbca1488bcb3c.jpg",
            content: "乔克叔叔杂货店来了",
            timestmp: "20201202",
          },
          {
            issend: false,
            username: "乔克",
            avatar:
              "https://up.enterdesk.com/edpic_source/42/7d/72/427d72b831d61616098dbca1488bcb3c.jpg",
            content: "GZY，来看看 乔克叔叔杂货店来了",
            timestmp: "20201202",
          },
        ],
      },
    ];

    friends = [
      {id:0,
      nickname:"好朋友1",
      headImg:"https://up.enterdesk.com/edpic_source/42/7d/72/427d72b831d61616098dbca1488bcb3c.jpg"
      },
      {id:1,
      nickname:"好朋友2",
      headImg:"https://up.enterdesk.com/edpic_source/42/7d/72/427d72b831d61616098dbca1488bcb3c.jpg"
      },
      {id:2,
      nickname:"好朋友3",
      headImg:"https://up.enterdesk.com/edpic_source/42/7d/72/427d72b831d61616098dbca1488bcb3c.jpg"
      },
      {id:3,
      nickname:"好朋友4",
      headImg:"https://up.enterdesk.com/edpic_source/42/7d/72/427d72b831d61616098dbca1488bcb3c.jpg"
      },
    ]
    window.addEventListener("resize", this.getHeight);
    this.getHeight();
    // this.getFriends();
    localStorage.setItem("lss", JSON.stringify(lss));
    localStorage.setItem("friends",JSON.stringify(friends));
    // localStorage.setItem("friends", JSON.stringify(friends));
    // console.log(JSON.parse(localStorage.getItem("ls")));
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
