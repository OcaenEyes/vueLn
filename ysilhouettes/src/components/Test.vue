<template >
  <div>
    <el-button @click="getResume">获取resume信息</el-button>
    <!-- <el-card>
      <div>{{info.name}}</div>
      <div>{{info.phone}}</div>
      <div>{{info.email}}</div>
      <div>{{info.blog}}</div>
      <div>{{info.website}}</div>
    </el-card>
    <el-card v-for="i in skills" :key="i">
      <div>{{i.s_name}}</div>
      <div>{{i.s_grade}}</div>
    </el-card> -->
    <img src="/api/media/bg.jpg">
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      info: {
        id: null,
        name: null,
        phone: null,
        email: null,
        blog: null,
        website: null
      },
      skills: null
    };
  },
  created() {
    this.getResume();
    this.getSkills();
  },
  methods: {
    // getResume(){
    //   this.$http.get('/api/resume/1')
    //   .then(response => (this.info = response.data))

    // },
    getResume() {
      this.$http
        .get("/api/getresume", {
          params: {
            id: 1
          }
        })
        .then(res => (this.info = res.data.results[0]));
    },
    getSkills() {
      this.$http
        .get("/api/getskills", {
          params: {
            id: 1
          }
        })
        .then(res => (this.skills = res.data.results));
    },
  }
};
</script>

<style scoped>
</style>