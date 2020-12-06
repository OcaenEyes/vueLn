<template>
  <div  class="login-regist">
    <el-card class="login-regist-card" shadow='always' align="middle">
      <div>
        <el-button type="text" @click="clickLogin">登录</el-button>
        <el-button type="text" @click="clickRegist">注册</el-button>
      </div>
      <div :style="{ display: loginshow }"><Login></Login></div>
      <div :style="{ display: registshow }"><Register></Register></div>
    </el-card>
  </div>
</template>

<script>
import Login from "../components/Login";
import Register from "../components/Register";
export default {
  name: "LoginRegister",
  components: {
    Login,
    Register,
  },
  data() {
    return {
      loginshow: "",
      registshow: "none",
    };
  },
  methods: {
    clickLogin() {
      this.loginshow = "";
      this.registshow = "none";
    },
    clickRegist() {
      this.loginshow = "none";
      this.registshow = "";
    },
  },
};
</script>

<style scoped>
.login-regist{
  margin-top: calc(10%) ;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.login-regist-card{
  width: 400px;
}
</style>