<template>
  <div class="atriclemanager">
    <el-breadcrumb>
      <el-breadcrumb-item>博客管理</el-breadcrumb-item>
      <el-breadcrumb-item>文章管理</el-breadcrumb-item>
    </el-breadcrumb>

    <el-button size="small" @click="newArticle" >新建文章</el-button>

    <el-table stripe style="width:100%" :data="tableData">
      <el-table-column fixed prop="id" label="编号" width="80"></el-table-column>
      <el-table-column prop="title" label="标题" width="120"></el-table-column>
      <el-table-column prop="intro" label="简介" width="200"></el-table-column>
      <el-table-column prop="thumbPic" label="缩略图" width="200"></el-table-column>
      <el-table-column prop="views" label="浏览" width="100"></el-table-column>
      <el-table-column prop="recommend" label="推荐" width="100"></el-table-column>
      <el-table-column prop="createTime" label="创建时间" width="150"></el-table-column>
      <el-table-column prop="updateTime" label="更新时间" width="150"></el-table-column>
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
    this.getArticle();
  },

  methods: {
    getArticle() {
      this.axios
        .get("/blogs")
        .then(res => (console.log(res),this.totalPages = res.data.totalPages,this.tableData = res.data.content))
        .catch(error => console.log(error));
    },
    newArticle(){
      this.$router.push("/admin/articleadd")
    }
  }
};
</script>

<style scoped>
</style>