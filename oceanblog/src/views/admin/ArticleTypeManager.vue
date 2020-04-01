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
          <el-button type="text" size="small" @click="deleteType(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="totalElements"
      @current-change="page"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: null,
      totalElements: null
    };
  },

  created() {
    this.getBlogTypes();
  },

  methods: {
    page(currentPage) {
      this.getBlogTypes(currentPage);
    },
    getBlogTypes(index) {
      this.axios
        .get("/blogTypes", {
          params: {
            page: index
          }
        })
        .then(
          res => (
            // console.log(res),
            (this.totalElements = res.data.totalElements),
            (this.tableData = res.data.content)
          )
        )
        .catch(error => console.log(error));
    },
    newType() {
      this.$router.push("/admin/typeadd");
    },
    deleteType(row) {
      const _this = this;
      this.axios
        .get("/deleteBlogType", {
          params: {
            id: row.id
          }
        })
        .then(function(res) {
          if (res.status == 200) {
            _this.getBlogTypes();
          }
        })
        .catch(error => console.log(error));
    }
  }
};
</script>

<style scoped>
</style>