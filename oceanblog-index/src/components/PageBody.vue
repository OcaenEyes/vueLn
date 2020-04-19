<template>
  <div style="width:80%;margin-left:10%;height:800px">
      <DaliyRecommend></DaliyRecommend>
      <DaliyNew></DaliyNew>
      <ArticleList></ArticleList>
      <MusicPlayer></MusicPlayer>
  </div>
</template>
<script>
import DaliyNew from "./DaliyNew";
import MusicPlayer from "./MusicPlayer";
import DaliyRecommend from "./DaliyRecommend";
import ArticleList from "./ArticleList";

export default {
  components: {
    DaliyNew,
    MusicPlayer,
    DaliyRecommend,
    ArticleList
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>