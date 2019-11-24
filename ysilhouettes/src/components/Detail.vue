<template>
  <el-container>
    <el-main>
      <el-card shadow="hover">
        <Education></Education>
      </el-card>

      <el-card shadow="hover">
        <Experience></Experience>
      </el-card>

      <el-card shadow="hover">
        <Project></Project>
      </el-card>
    </el-main>
  </el-container>
</template>

<style scoped>
.el-main {
  padding: 10px;
}
.el-card {
  margin-bottom: 6px;
}
</style>

<script>
import Education from "./Education";
import Project from "./Project";
import Experience from "./Experience";
export default {
  name: "Detail",
  components: {
    Education,
    Experience,
    Project
  },
  data() {
    return {};
  },

  methods: {}
};
</script>
