<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <a href="">{{blog}}</a>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '这是一个VUE练习项目，作者GZY',
      blog:'https://blog.oceaneyes.cn',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
</style>

