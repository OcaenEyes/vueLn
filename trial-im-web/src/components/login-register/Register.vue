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

      <el-form-item label="密码" prop="pass">
        <el-input
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input
          type="password"
          v-model="ruleForm.checkPass"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submit('ruleForm')">注册</el-button>
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
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        phone: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        phone: [{ validator: checkPhone }],
      },
      myUserInfo: {},
      chatInfosRes: [],
    };
  },
  methods: {
    submit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.regist();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    regist() {
      let _this = this;
      this.axios
        .post("http://127.0.0.1:8081/register", null, {
          params: {
            phone: this.ruleForm.phone,
            password: this.ruleForm.pass,
          },
        })
        .then((res) => {
          if (res.data.resCode == "0000") {
            console.log(res.data.userDetail);
            console.log(JSON.stringify(res.data.userDetail));
            sessionStorage.setItem(
              "myUserInfo",
              JSON.stringify(res.data.userDetail)
            );
            sessionStorage.setItem("myCookie", "152955");
            this.myUserInfo = res.data.userDetail;
            console.log(sessionStorage.getItem("myCookie"));
            console.log(sessionStorage.getItem("myUserInfo"));
          } else {
            _this.$notify({
              title: "通知",
              message: res.data.resMsg,
              type: "error",
            });
          }
        });
    },
    getMsgs() {
      const _this = this;
      this.axios
        .get("http://127.0.0.1:8081/getChat", {
          params: {
            userId: this.myUserInfo.userId,
          },
        })
        .then(function (res) {
          console.log(res.data);
          if (res.data.resCode == "0000") {
            sessionStorage.setItem(
              "chatInfos",
              JSON.stringify(res.data.chatInfos)
            );
            _this.chatInfosRes = res.data.chatInfos;
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
      this.axios
        .get("http://127.0.0.1:8081/getFriends", {
          params: {
            userId: this.myUserInfo.userId,
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
  watch: {
    myUserInfo: {
      handler() {
        this.getMsgs();
        this.getFriends();
      },
      deep: true,
    },
    chatInfosRes: {
      handler() {
        var id = "";
        if (this.chatInfosRes != null) {
          if (this.chatInfosRes.length > 0) {
            if (this.chatInfosRes[this.chatInfosRes.length - 1].group) {
              id = this.chatInfosRes[this.chatInfosRes.length - 1].chatGroupId;
            } else {
              id = this.chatInfosRes[this.chatInfosRes.length - 1].chatUserId;
            }
            this.$router.push({ path: "/msgView/msgItem/" + id });
          } else {
            console.log("chatInfos", this.chatInfosRes);
            this.$router.push({ path: "/msgView/msgItem/" + id });
          }
        } else {
          console.log("chatInfos", this.chatInfosRes);
          this.$router.push({ path: "/msgView/msgItem/" });
        }
      },
    },
  },
};
</script>

<style scoped>
</style>