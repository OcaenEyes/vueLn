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
      chatInfos: [],
      friends: [],
      myUserInfo: {},
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
          if (res.data.resCode == "0000") {
            localStorage.setItem(
              "myUserInfo",
              JSON.stringify(res.data.userDetail)
            );
            this.myUserInfo = res.data.userDetail;
            localStorage.setItem("myCookie", "152955");
          } else {
            _this.$notify({
              title: "通知",
              message: res.data.resMsg,
              type: "error",
            });
          }
        });

      if (this.myUserInfo != null) {
        this.getFriends();
        this.getMsgs();
      }
      if (this.chatInfos != null) {
        this.$router.push({ name: "Home" });
      }
    },
    getMsgs() {
      const _this = this;
      this.axios
        .get("http://127.0.01:8081/getChat", {
          params: {
            userId: JSON.parse(localStorage.getItem("myUserInfo"))["userId"],
          },
        })
        .then(function (res) {
          console.log(res.data);
          if (res.data.resCode == "0000") {
            localStorage.setItem(
              "chatInfos",
              JSON.stringify(res.data.chatInfos)
            );
            this.chatInfos = res.data.chatInfos;
          } else {
            _this.$notify({
              title: "通知",
              message: res.recMsg,
              type: "error",
            });
          }
        });
    },

    getFriends() {
      const _this = this;
      this.axios
        .get("http://127.0.01:8081/getFriends", {
          params: {
            userId: JSON.parse(localStorage.getItem("myUserInfo"))["userId"],
          },
        })
        .then(function (res) {
          console.log(res.data);
          if (res.data.resCode == "0000") {
            localStorage.setItem("friends", JSON.stringify(res.data.friends));
            this.friends = res.data.friends;
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
    console.log(localStorage.getItem("myCookie"));
  },
};
</script>

<style scoped>
</style>