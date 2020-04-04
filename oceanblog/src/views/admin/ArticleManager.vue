<template>
  <div class="atriclemanager">
    <el-card style="width:88%;margin-left:6%;padding-top:20px">
      <el-breadcrumb>
        <el-breadcrumb-item>博客管理</el-breadcrumb-item>
        <el-breadcrumb-item>文章管理</el-breadcrumb-item>
      </el-breadcrumb>

      <el-button size="small" @click="newArticle" style="float:right;margin-bottom:30px">新建文章</el-button>

      <el-table stripe style="width:100%" :data="tableData">
        <el-table-column fixed prop="id" label="编号" width="80"></el-table-column>
        <el-table-column prop="title" label="标题" width="120"></el-table-column>
        <el-table-column prop="intro" label="简介" width="200"></el-table-column>
        <el-table-column prop="thumbPic" label="文章封面" width="200">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="right">
              <el-image slot="reference" :src="scope.row.thumbPic" style="width:60px;height:60px"></el-image>
              <el-image :src="scope.row.thumbPic" style="width:200px;height:200px"></el-image>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="views" label="浏览" width="100"></el-table-column>
        <el-table-column prop="recommend" label="推荐" width="100" :formatter="formatBoolean"></el-table-column>
        <el-table-column prop="createTime" label="创建时间" width="150"></el-table-column>
        <el-table-column prop="updateTime" label="更新时间" width="150"></el-table-column>
        <el-table-column fixed="right" label="操作" width="200">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="detial(scope.row)">查看</el-button>
            <el-button type="text" size="small" @click="modify(scope.row)">编辑</el-button>
            <el-button type="text" size="small" @click="deleteArticle(scope.row)">删除</el-button>
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
    this.getArticle();
  },

  methods: {
    modify(row) {
      this.$router.push({
        path: "/admin/articlemodify",
        query: {
          articleId: row.id
        }
      });
    },
    detial(row) {
      this.$router.push({
        path: "/admin/articledetial",
        query: {
          articleId: row.id
        }
      });
      // console.log(row.id);
    },
    formatBoolean(row, column, cellValue) {
      var result = "";
      if (cellValue) {
        result = "是";
      } else {
        result = "否";
      }
      return result;
    },
    page(currentPage) {
      this.getArticle(currentPage);
    },
    getArticle(index) {
      this.axios
        .get("/blogs", {
          params: {
            page: index - 1
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
    newArticle() {
      this.$router.push("/admin/articleadd");
    },
    deleteArticle(row) {
      const _this = this;
      this.axios
        .get("/deleteBlog", {
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
            _this.getArticle();
          }
        })
        .catch(error => console.log(error));
    }
  }
};
</script>

<style scoped>
</style>