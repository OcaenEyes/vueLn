<template>
  <div style="display: flex; width: 100%">
    <el-container class="friendlisttool"
      ><FriendListAside :friends="friends"></FriendListAside
    ></el-container>
    <el-container>
      <router-view></router-view>
    </el-container>
  </div>
</template>
<script>
import FriendListAside from "../components/friend/aside/FriendListAside";
export default {
  name: "friend",
  components: {
    // friendWindowTitle,
    // friendWindow,
    // SendTool,
    FriendListAside,
  },
  data() {
    return {
      viewheight: "",
      friends: [],
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
    this.friends = JSON.parse(localStorage.getItem("friends"));
    console.log(this.friends);
  },
  // watch:{
  //   $route(){
  //     this.friends = JSON.parse(localStorage.getItem("friends"));
  //     console.log(this.friends);
  //   }
  // }
};
</script>

<style scoped>
.friendlisttool {
  /* background-color: #eee; */
  color: #333;
  border-top: 0.1px solid #eee;
  border-bottom: 0.1px solid #eee;
  max-width: 240px;
}
.friendlisttool::-webkit-scrollbar {
  display: none;
}
</style>