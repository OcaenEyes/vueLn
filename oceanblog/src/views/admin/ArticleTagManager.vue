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
        <template slot-scope="scope">
          <el-button type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
          <el-button type="text" size="small" @click="deleteTag(scope.row)">删除</el-button>
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
    this.getBlogTags();
  },

  methods: {
    page(currentPage) {
      this.getBlogTags(currentPage);
    },
    getBlogTags(index) {
      this.axios
        .get("/blogTags", {
          params: {
            page: index
          }
        })
        .then(
          res => (
            (this.totalElements = res.data.totalElements),
            (this.tableData = res.data.content)
          )
        )
        .catch(error => console.log(error));
    },
    newTag() {
      this.$router.push("/admin/tagadd");
    },
    deleteTag(row) {
      const _this= this;
      this.$axios
        .get("/deleteBlogTag", {
          params: {
            id: row.id
          }
        })
        .then(function(res) {
          if (res.status == 200) {
            _this.getBlogTags();
          }
        })
        .catch(error => console.log(error));
    }
  }
};
</script>

<style scoped>
</style>