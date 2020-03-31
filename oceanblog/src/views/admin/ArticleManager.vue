<template>
  <div class="atriclemanager">
    <el-breadcrumb>
      <el-breadcrumb-item>博客管理</el-breadcrumb-item>
      <el-breadcrumb-item>文章管理</el-breadcrumb-item>
    </el-breadcrumb>

    <el-button size="small">新建文章</el-button>

    <el-table stripe style="width:100%" :data="tableData">
      <el-table-column fixed prop="id" label="编号" width="80"></el-table-column>
      <el-table-column prop="title" label="标题" width="150"></el-table-column>
      <el-table-column prop="intro" label="简介" width="220"></el-table-column>
      <el-table-column prop="createTime" label="创建时间" width="150"></el-table-column>
      <el-table-column prop="updateTime" label="更新时间" width="150"></el-table-column>
      <el-table-column prop="blogUser" label="作者" width="100"></el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope>
          <el-button type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        // {
        //   id: 0,
        //   title: "第一篇",
        //   intro: "简介简介，这是简介",
        //   createTime: "2016-05-02",
        //   updateTime: "2017-06-03",
        //   blogUser: "zy"
        // },
        // {
        //   id: 0,
        //   title: "第一篇",
        //   intro: "简介简介，这是简介",
        //   createTime: "2016-05-02",
        //   updateTime: "2017-06-03",
        //   blogUser: "zy"
        // },
        // {
        //   id: 0,
        //   title: "第一篇",
        //   intro: "简介简介，这是简介",
        //   createTime: "2016-05-02",
        //   updateTime: "2017-06-03",
        //   blogUser: "zy"
        // },
        // {
        //   id: 0,
        //   title: "第一篇",
        //   intro: "简介简介，这是简介",
        //   createTime: "2016-05-02",
        //   updateTime: "2017-06-03",
        //   blogUser: "zy"
        // }
      ]
    };
  },

  created() {
    this.getArticle();
  },

  methods: {
    getArticle() {
      axios.get("/blogs")
        .then(function(response) {
          console.log(response.data.content);
          this.tableData = response.data.content;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
</style>