<template>
  <el-row>
    <div>
      <i class="el-icon-files"></i>&nbsp;&nbsp;
      <b>项目经验</b>
    </div>
    <el-col :span="11" style="margin:14px;padding:0;" v-for="(project,index) in projects" :key="index">
      <a href="">
        <el-card :body-style="{padding:'0px'}" shadow="hover">
          <img src="../assets/bg.jpg" style="height:160px;width:100%;" />
          <div style="padding:14px;font-size:14px;line-height:28px;">
            <div>
              <span>
                <b>{{project.p_name}}</b>
              </span>
            </div>
            <div>
              <span>开始日期：</span>{{project.p_sdate}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>结束日期：</span>{{project.p_edate}}
            </div>
            <div></div>
          </div>
        </el-card>
      </a>
    </el-col>
  </el-row>
</template>

<style scoped>
a {
  text-decoration: none;
}
</style>

<script>
export default {
  name: "Project",
  data() {
    return {
      projects:null,
    };
  },
  created() {
    this.getProjects();
  },
  methods: {
    getProjects() {
      this.$http
        .get("/api/getprojects", {
          params: {
            id: 1
          }
        })
        .then(res => (this.projects = res.data.results));
    }
  }
};
</script>