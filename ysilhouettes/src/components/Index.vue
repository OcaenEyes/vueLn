<template>
  <el-row
    :gutter="10"
    style="width:78%;margin-left:11%;margin-top:66px;background-color:#fff;opacity:96%;"
  >
    <el-col>
      <div class="grid-content bg-header">
        <Header></Header>
      </div>
    </el-col>
    <el-col :xs="24" :sm="8" :md="8" :lg="6" :xl="6">
      <div class="grid-content bg-profile">
        <Aside></Aside>
      </div>
    </el-col>
    <el-col :xs="24" :sm="16" :md="16" :lg="18" :xl="18" >
      <div class="grid-content bg-detial">
        <Detial></Detial>
      </div>
    </el-col>
  </el-row>
</template>

<style scoped>
.el-col {
  border-radius: 4px;
  margin-bottom: 10px;
}

/* .bg-header {
  background: #99a9bf;
}
.bg-profile {
  background: #d3dce6;
}
.bg-detial {
  background: #e5e9f2;
} */
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.el-main {
  padding: 10px;
}
.el-header,
.el-footer {
  border-radius: 4px;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-main {
  border-radius: 4px;
  color: #333;
  text-align: center;
}
</style>

<script>
import Aside from "./Aside";
import Detial from "./Detail";
import Header from "./Header";
import UserInfo from "./UserInfo";
export default {
  name: "Index",
  components: {
    Aside,
    Detial,
    Header,
    UserInfo
  },
  created(){
    this.$notify({
      title:"Good Day~",
      message:"欢迎访问高智勇的个人简历",
      type:"success",
    });

  },
};
</script>