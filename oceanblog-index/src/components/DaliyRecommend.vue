<template>
  <div class="daliy-recommend">
    <div class="title">
      <h3>每日推荐</h3>
    </div>
    <el-row>
      <el-col v-for="(i) in 5" :key="i" :span="4" :offset=" i>1?1:0">
        <el-card :body-style="{padding:'0px',height:'140px'}">
          <!-- <div @mouseover="mouserOver" @mouseleave="mouseLeave"> -->
            <div class="intro" :style="active">
              <h4>嘿嘿</h4>
              <span>你看起来很好吃</span>
            </div>
            <el-image
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            ></el-image>
          <!-- </div> -->
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: ""
    };
  },
  methods: {
    mouserOver() {
      this.active = "display:none";
    },
    mouseLeave() {
      this.active = "";
    }
  }
};
</script>

<style scoped>
.el-card {
  margin-top: 14px;
}
.daliy-recommend {
  margin-top: 20px;
}
.title {
  text-align: left;
}
.image {
  width: 100%;
}
.intro {
  z-index: 2;
  position: absolute;
  margin-top: 80px;
  margin-left: 14px;
  color: #fff;
  text-align: left;
  line-height: 24px;
  font-size: 14px;
}
</style>