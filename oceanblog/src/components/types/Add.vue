<template>
  <div>
    <el-page-header @back="goBack" title="返回类型列表" content="新建类型"></el-page-header>
    <el-card style="width:80%;margin-left:10%;margin-top:40px;padding-top:40px">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="类型名称">
          <el-input v-model="form.name"></el-input>
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
      console.log("submit!");
      let typedata = Qs.stringfy({
        blogType :JSON.stringify(this.form)
      });
      this.axios
        .post("/saveBlogType", {
          params: {
            blogType: {
              name: this.form.name
            }
          }
        })
        .then(res => console.log(res))
        .catch(error => console.log(error));
    }
  }
};
</script>

<style scoped>
</style>