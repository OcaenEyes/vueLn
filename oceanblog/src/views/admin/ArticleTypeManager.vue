<template>
  <div class="atricletypemanager">
    <el-breadcrumb>
      <el-breadcrumb-item>博客管理</el-breadcrumb-item>
      <el-breadcrumb-item>类型管理</el-breadcrumb-item>
    </el-breadcrumb>

    <el-button size="small" @click="newType">新建类型</el-button>

    <el-table stripe style="width:100%" :data="tableData">
      <el-table-column fixed prop="id" label="编号" width="80"></el-table-column>
      <el-table-column prop="name" label="类型名称" width="150"></el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-button type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
          <el-button type="text" size="small" @click="deleteType(scope.$index,tableData)">删除</el-button>
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
      totalPages: null
    };
  },

  created() {
    this.getBlogTypes();
  },

  methods: {
    getBlogTypes() {
      this.axios
        .get("/blogTypes")
        .then(
          res => (
            (this.totalPages = res.data.totalPages),
            (this.tableData = res.data.content)
          )
        )
        .catch(error => console.log(error));
    },
    newType() {
      this.$router.push("/admin/typeadd");
    },
    deleteType(index, rows) {
      console.log(index);
      console.log(rows);
      this.axios
        .get("/deleteBlogType", {
          params: {
            id: rows[index].id
          }
        })
        .then(res => console.log(res.s))
        .catch(error => console.log(error));
    }
  }
};
</script>

<style scoped>
</style>