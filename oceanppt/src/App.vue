<!--
 * @Author: OCEAN.GZY
 * @Date: 2023-07-14 15:38:16
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2023-07-15 15:12:49
 * @FilePath: /oceanppt/src/App.vue
 * @Description: 注释信息
-->
<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
  color:#f5f5f5;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
