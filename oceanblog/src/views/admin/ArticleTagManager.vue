<template>
  <div class="atricletagmanager">
    <el-card style="width:88%;margin-left:6%;padding-top:20px">
      <el-breadcrumb>
        <el-breadcrumb-item>博客管理</el-breadcrumb-item>
        <el-breadcrumb-item>标签管理</el-breadcrumb-item>
      </el-breadcrumb>

      <el-button size="small" @click="newTag" style="float:right;margin-bottom:30px">新建标签</el-button>

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
        style="float:right;margin-top:20px;margin-bottom:20px"
      ></el-pagination>
    </el-card>
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
  mounted() {},

  methods: {
    page(currentPage) {
      console.log("currentPage", currentPage);
      this.getBlogTags(currentPage);
    },
    getBlogTags(index) {
      this.axios
        .get("/blogTags", {
          params: {
            page: index - 1
          }
        })
        .then(res => {
          this.tableData = res.data.content;
          this.totalElements = res.data.totalElements;
          console.log("tableData", this.tableData);
          console.log("totalElements", this.totalElements);
        })
        .catch(error => console.log(error));
    },
    newTag() {
      this.$router.push("/admin/tagadd");
    },
    deleteTag(row) {
      const _this = this;
      this.$axios
        .get("/deleteBlogTag", {
          params: {
            id: row.id
          }
        })
        .then(function(res) {
          if (res.status == 200) {
            _this.$notify({
              title: "通知",
              message: "已删除",
              type: "warning"
            });
            _this.getBlogTags();
          }
        })
        .catch(error =>
          _this.$notify({
            title: "通知",
            message: error,
            type: "error"
          })
        );
    }
  }
};
</script>

<style scoped>
</style>