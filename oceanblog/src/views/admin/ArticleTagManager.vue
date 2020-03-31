<template>
  <div class="atricletagmanager">
    <el-breadcrumb>
      <el-breadcrumb-item>博客管理</el-breadcrumb-item>
      <el-breadcrumb-item>标签管理</el-breadcrumb-item>
    </el-breadcrumb>

    <el-button size="small" @click="newTag">新建标签</el-button>

    <el-table stripe style="width:100%" :data="tableData">
      <el-table-column fixed prop="id" label="编号" width="80"></el-table-column>
      <el-table-column prop="name" label="标签名称" width="150"></el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope>
          <el-button type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="totalPages"></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: null,
      totalPages:null,
    };
  },
  created() {
    this.getBlogTags();
  },

  methods: {
    getBlogTags() {
      this.axios
        .get("/blogTags")
        .then(res => (this.totalPages = res.data.totalPages,this.tableData = res.data.content))
        .catch(error => console.log(error));
    },
    newTag(){
      this.$router.push("/admin/tagadd");
    }
  }
};
</script>

<style scoped>
</style>