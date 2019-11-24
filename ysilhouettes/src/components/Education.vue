<template>
  <el-row>
    <div>
      <i class="el-icon-reading"></i>&nbsp;&nbsp;
      <b>教育</b>
    </div>
    <!-- <div style="margin-top:20px;margin-bottom:10px;">
      <el-tag type="warning">
        <span>学校：&nbsp;&nbsp;{{education.e_name}}</span>
      </el-tag>
      <el-divider direction="vertical"></el-divider>
      <el-tag type="success">
        <span>专业：&nbsp;&nbsp;{{education.e_major}}</span>
      </el-tag>
      <el-divider direction="vertical"></el-divider>
      <el-tag type="warning">
        <span>开始时间：&nbsp;&nbsp;{{education.e_sdate}}</span>
      </el-tag>
      <el-divider direction="vertical"></el-divider>
      <el-tag type="success">
        <span>结束时间：&nbsp;&nbsp;{{education.e_edate}}</span>
      </el-tag>
    </div>-->

    <el-card shadow="never" v-for="(i,index) in education" :key="index">
      <div>
        <el-tooltip class="item" effect="light" content="本科" placement="left-start">
        <span style="margin-right:68px;">{{i.e_name}}</span>
        </el-tooltip>
        <el-divider direction="vertical"></el-divider>
        <el-tooltip class="item" effect="light" content="专业" placement="right-start">
        <span style="margin-left:68px;">{{i.e_major}}</span>
        </el-tooltip>
      </div>
    </el-card>
  </el-row>
</template>

<style scoped>
.el-card{
  width: 96%;
  margin-top: 10px;
  line-height: 30px;
  border: none;
  text-align: center;
}

</style>

<script>
export default {
  name: "Education",
  data() {
    return {
      education: null
    };
  },
  created() {
    this.getEducation();
  },

  methods: {
    getEducation() {
      this.$http
        .get("/api/geteducation", {
          params: {
            id: 1
          }
        })
        .then(res => (this.education = res.data.results));
    }
  }
};
</script>