<template>
  <div class="home">
    <el-card class="main-body">
      这是首页
      <ChatRoom></ChatRoom>
    </el-card>
  </div>
</template>

<script>
// @ is an alias to /src
import ChatRoom from "../components/ChatRoom";
export default {
  name: "Home",
  components: {
    ChatRoom
  }
};
</script>

<style scoped>
.el-card {
  width: 68% !important;
  margin-left: 16% !important;
  background-color: antiquewhite !important;
}
</style>
