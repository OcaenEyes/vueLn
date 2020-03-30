<template>
  <div class="admin">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>

      <el-container>
        <div style="overflow-x:hidden">
          <el-aside width="200px">
            <Aside></Aside>
          </el-aside>
        </div>
        <el-container>
          <el-main>
            <Main></Main>
          </el-main>
          <el-footer>
            <Footer></Footer>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from "./../../components/Aside";
import Header from "./../../components/Header";
import Main from "./../../components/Main";
import Footer from "./../../components/Footer";
export default {
  name: "admin",
  components: {
    Aside,
    Header,
    Main,
    Footer
  },
  data() {
    return {
      msg: "admin后台"
    };
  }
};
</script>

<style scoped>
.el-aside {
  text-align: left;
  height: 800px;
}
.el-header {
  color: #000;
  line-height: 60px;
}
.el-main {
  background-color: khaki;
}

.el-footer {
  background-color: lawngreen;
  line-height: 60px;
}
</style>