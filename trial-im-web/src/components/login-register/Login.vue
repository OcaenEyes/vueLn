<template>
  <div style="width: 72%">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      class="demo-ruleForm"
    >
      <el-form-item label="账号" prop="phone">
        <el-input v-model.number="ruleForm.phone"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="ruleForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submit('ruleForm')">登录</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    var checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("账号不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          callback();
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        password: "",
        phone: "",
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        phone: [{ validator: checkPhone }],
      },
    };
  },
  methods: {
    submit(formName) {
      let that = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          that.login();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    login() {
      let _this = this;
      this.axios
        .post("http://127.0.0.1:8081/login", null, {
          params: {
            phone: this.ruleForm.phone,
            password: this.ruleForm.password,
          },
        })
        .then((res) => {
          if (res.data.code == "200") {
            var usrdetial = res.data.userDetial;
            localStorage.setItem("userDetial", JSON.stringify(usrdetial));
            console.log(JSON.parse(localStorage.getItem("userDetial")));
          } else {
            _this.$notify({
              title: "通知",
              message: res.data.msg,
              type: "error",
            });
          }
        });
    },
  },
};
</script>

<style scoped>
</style>