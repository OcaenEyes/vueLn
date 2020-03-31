<template>
  <div>
    <el-page-header @back="goBack" title="返回标签列表" content="新建标签"></el-page-header>
<el-card style="width:80%;margin-left:10%;margin-top:40px;padding-top:40px">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="标签名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small" @click="onSubmit">立即创建</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data(){
    return {
      form: {
          name: '',
      }
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style scoped>
</style>