<template>
  <div class="login">
    <el-form :model="user" ref="user" label-width="100px" class="demo-dynamic">
      <el-form-item
        prop="username"
        label="用户名"
        :rules="[
      { required: true, message: '请输入用户名', trigger: 'blur' },
    ]"
      >
        <el-input v-model="user.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item
        prop="password"
        label="密码"
        :rules="[
      { required: true, message: '请输入密码', trigger: 'blur' },
       ]"
      >
        <el-input v-model="user.password" show-password placeholder="请输入密码"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="login('user')">登录</el-button>
        <el-button @click="regist('user')">注册</el-button>
        <el-button @click="resetForm('user')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },

  methods: {
    login(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.axios
            .post("/login", this.user)
            .then(res => console.log(res))
            .catch(error => console.log(error));
          console.log(this.user);
        } else {
          console.log("error submit!!");
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    regist(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.axios
            .post("/register", this.user)
            .then(res => console.log(res))
            .catch(error => console.log(error));
          console.log(this.user);
        } else {
          console.log("error regsiter!!");
        }
      });
    }
  }
};
</script>

<style scoped>
</style>