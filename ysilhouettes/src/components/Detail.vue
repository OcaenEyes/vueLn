<template>
  <el-container>
    <el-main>
      <el-card><Education></Education></el-card>

      <el-card><Experience></Experience></el-card>

      <el-card><Project></Project></el-card>

    </el-main>
  </el-container>
</template>

<style scoped>
.el-main {
  padding: 10px;
}
</style>

<script>
import Education from './Education'
import Project from './Project'
import Experience from './Experience'
export default {
  name: "Detail",
  components:{
    Education,
    Experience,
    Project,

  },
  data() {
    return {

    };
  },

  methods: {

  }
};
</script>
