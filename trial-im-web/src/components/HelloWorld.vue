<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button>323232</el-button>
    <cube-button>Button</cube-button>

   <el-button> <router-link to="/im">跳转IM</router-link></el-button>
   <div style="width:700px;height=300px;background-color:#000;color:#fff">222</div>
  </div>
</template>

<script>
// import Im from './Im';
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
