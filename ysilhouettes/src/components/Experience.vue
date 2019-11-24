<template>
  <el-row>
    <div>
      <i class="el-icon-monitor"></i>&nbsp;&nbsp;
      <b>工作经历</b>
    </div>
    <el-col :span="11" style="margin:14px;padding:0;" v-for="(job,index) in jobs" :key="index">
      <a href target="_Blank">
        <el-card :body-style="{padding:'0px'}" shadow="hover">
          <img src="../assets/bg.jpg" style="height:160px;width:100%;" />
          <div style="padding:14px;font-size:14px;line-height:28px;">
            <div>
              <span>
                <b>{{job.j_name}}</b>
              </span>
            </div>
            <div>
              <span>开始日期：</span>
              {{job.j_sdate}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>结束日期：</span>
              {{job.j_edate}}
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
  name: "Experience",
  data() {
    return {
      jobs: null
    };
  },
  created() {
    this.getJobs();
  },
  methods: {
    getJobs() {
      this.$http
        .get("/api/getjobs", {
          params: {
            id: 1
          }
        })
        .then(res => (this.jobs = res.data.results));
    }
  }
};
</script>