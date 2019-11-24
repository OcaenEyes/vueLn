<template>
  <div id="app" :style="backgroundApp" class="root" v-wechat-title="$route.meta.title">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      backgroundApp:{
        backgroundImage:'url('+require('./assets/bg.jpg')+')',
        backgroundRepeat:'no-repeat',     
        backgroundSize:'100%,100%',
        backgroundAttachment:'fixed',
      }
    };
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  overflow-x: hidden;
}
body{
  margin: 0;

}
</style>
