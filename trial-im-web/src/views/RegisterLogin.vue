<template>
  <div>
    <div>
      <el-button @click.native="clickLogin">登录</el-button>
      <el-button @click.native="clickRegist">注册</el-button>
    </div>

    <div :style="{ display: loginshow }">
      <el-card> <Login></Login></el-card>
    </div>
    <div :style="{ display: registshow }">
      <el-card><Register></Register></el-card>
    </div>
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
    clickResgit() {
      this.loginshow = "none";
      this.registshow = "";
    },
  },
};
</script>

<style scoped>
</style>