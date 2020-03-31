<template>
  <div>
    <el-page-header @back="goBack" title="返回文章列表" content="新建文章"></el-page-header>
  </div>
</template>

<script>
export default {
    methods:{
        goBack(){
            this.$router.go(-1)
        }
    }
};
</script>

<style scoped>
</style>