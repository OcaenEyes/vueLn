<template>
  <div>
    <el-page-header @back="goBack" title="返回类型列表" content="新建类型"></el-page-header>
    <el-card style="width:80%;margin-left:10%;margin-top:40px;padding-top:40px">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="类型名称">
          <el-input ref="name" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button plain size="small" @click="onSubmit">立即创建</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: ""
      }
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    onSubmit() {
      const _this= this;
      // console.log("submit!");
      // console.log(this.form);
      this.axios
        .post("/saveBlogType", this.form)
        .then(
          // res => console.log(res)
          function(res) {
            // console.log(res);
            if (res.status ==200){
              _this.$notify({
                title: "通知",
                message: "恭喜你，新建成功",
                type: "success"
              });
              _this.$router.go(-1);
            }
          }
        )
        .catch(error => console.log(error));
    }
  }
};
</script>

<style scoped>
</style>