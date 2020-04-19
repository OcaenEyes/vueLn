<template>
  <div class="index">
    <Header></Header>
    <Banner></Banner>
    <PageBody></PageBody>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "../components/Banner"
import Header from "../components/Header"
import PageBody from "../components/PageBody"
export default {
  name: 'Index',
  components: {
    Banner,
    Header,
    PageBody,
  }
}
</script>

<style scoped>
/* .index{
  background-color: black;
} */
</style>