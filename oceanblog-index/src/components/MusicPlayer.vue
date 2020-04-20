<template>
  <!-- <div class="music" @mouseover="mouseOver" @mouseleave="mouseLeave" :class="{'music-all':showAll}"> -->
  <div class="music">
    <aplayer
      autoplay
      :music="music"
      :list="musicList"
      theme="#000"
      shuffle
      repeat="repeat-all"
      float
    ></aplayer>
  </div>
</template>
<script>
import aplayer from "vue-aplayer";
export default {
  data() {
    return {
      music: {
        title: "把孤独当晚餐",
        artist: "INTEREST",
        src:
          "http://stor.cloudmusics.cn/mp3/2020/01/60f70058ef180695ad6401b887f652ae.mp3",
        pic: "http://devtest.qiniudn.com/Preparation.jpg",
        lrc: "[00:00.00]lrc here\n[00:01.00]aplayer"
      },
      musicList: [
        {
          title: "成都",
          artist: "INTEREST",
          src:
            "http://stor.cloudmusics.cn/mp3/2019/12/6ccec7080792a007f3e7902b413d6042.mp3",
          pic: "http://devtest.qiniudn.com/Preparation.jpg",
          lrc: "[00:00.00]lrc here\n[00:01.00]aplayer"
        },
        {
          title: "你的答案",
          artist: "INTEREST",
          src:
            "http://stor.cloudmusics.cn/mp3/2019/11/f5ad0d7cfe4be89442f2db01764ee27b.mp3",
          pic: "http://devtest.qiniudn.com/Preparation.jpg",
          lrc: "[00:00.00]lrc here\n[00:01.00]aplayer"
        },
        {
          title: "明年今日",
          artist: "INTEREST",
          src:
            "http://stor.cloudmusics.cn/mp3/2019/11/cef0481e96c663afcedb7bcadbecae7d.mp3",
          pic: "http://devtest.qiniudn.com/Preparation.jpg",
          lrc: "[00:00.00]lrc here\n[00:01.00]aplayer"
        }
      ]
    };
  },
  components: {
    aplayer
  },

  methods: {
    mouseOver() {},
    mouseLeave() {}
  }
};
</script>

<style scoped>
.music {
  position: fixed;
  bottom: 10px;
  z-index: 999;
  left: 1%;
}
.music-all {
  position: fixed;
  bottom: 0;
  z-index: 999;
  left: 1%;
  width: 98%;
}
</style>