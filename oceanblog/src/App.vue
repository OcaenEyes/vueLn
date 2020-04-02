<template>
  <div id="app">
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
          <el-main style="padding-top: 0px">
              <router-view></router-view>
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
import Aside from "./components/Aside";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: 'app',
  components: {
    Aside,
    Header,
    Footer,
  }
}
</script>

<style>
*{
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
.el-aside {
  text-align: left;
  height: 800px;
}
.el-header {
  color: #000;
  /* background-color: gray; */
  /* margin-bottom: 4px; */
}

.el-footer {
  background-color: lawngreen;
  line-height: 60px;
}

.el-image{
  vertical-align: middle;
}
.el-avatar{
  vertical-align:middle;
}
</style>
