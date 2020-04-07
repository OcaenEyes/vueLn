<template>
  <div class="index">
    <Header></Header>
    <Banner></Banner>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "../components/Banner"
import Header from "../components/Header"
export default {
  name: 'Index',
  components: {
    Banner,
    Header
  }
}
</script>

<style scoped>
/* .index{
  background-color: black;
} */
</style>