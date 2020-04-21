<template>
  <div>
    <el-carousel :interval="5000" type="card" height="380px">
      <el-carousel-item v-for="(item,index) in blogsNew" :key="index">
        <div class="intro">
          <h1>{{item.title}}</h1>
          <span>{{item.intro}}</span>
        </div>
        <el-image
          :src="item.thumbPic"
          class="image"
        ></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogsNew: null
    };
  },
  created() {
    this.getBlogsNew();
  },
  mounted() {},

  methods: {
    getBlogsNew() {
      // const _this = this;
      this.axios
        .get("/blogNew")
        .then(
          res => (
            (this.blogsNew = res.data),
            console.log(res.data),
            console.log(this.blogsNew)
          )
        )
        .catch(error => console.log(error));
    }
  }
};
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  /* line-height: 200px; */
  margin: 0;
}

.image {
  width: 100%;
}
.intro {
  z-index: 2;
  position: absolute;
  margin-top: 140px;
  margin-left: 100px;
  color: #fff;
  text-align: left;
  /* line-height: 24px; */
  /* font-size: 14px; */
}
</style>