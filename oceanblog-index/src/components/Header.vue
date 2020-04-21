<template>
  <div class="header" :class="{'header-active':needFixed}">
    <!-- <div class="header-active" > -->
    <div class="logo">
      <el-image
        style="height:56px;width:200px;padding:5px;"
        aria-placeholder="OCEANEYES INDEX"
        :src="url"
      ></el-image>
    </div>
    <div class="nav">
      <el-dropdown >
        <span class="el-dropdown-link" :class="{'scroll-active':needFixed}">
          产品
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown" class="dropdown-content">
          <el-dropdown-item>内容</el-dropdown-item>
          <el-dropdown-item>推荐</el-dropdown-item>
          <el-dropdown-item>数据</el-dropdown-item>
          <el-dropdown-item>中台</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown>
        <span class="el-dropdown-link" :class="{'scroll-active':needFixed}">
          开发
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown" class="dropdown-content">
          <el-dropdown-item>Python</el-dropdown-item>
          <el-dropdown-item>Java</el-dropdown-item>
          <el-dropdown-item>MySQL</el-dropdown-item>
          <el-dropdown-item>Android</el-dropdown-item>
          <el-dropdown-item>VUE</el-dropdown-item>
          <el-dropdown-item>FLutter</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown>
        <span class="el-dropdown-link" :class="{'scroll-active':needFixed}">
          设计
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown" class="dropdown-content">
          <el-dropdown-item>PS</el-dropdown-item>
          <el-dropdown-item>AI</el-dropdown-item>
          <el-dropdown-item>AE</el-dropdown-item>
          <el-dropdown-item>PR</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown>
        <span class="el-dropdown-link" :class="{'scroll-active':needFixed}">
          运营
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown" class="dropdown-content">
          <el-dropdown-item>增长</el-dropdown-item>
          <el-dropdown-item>营销</el-dropdown-item>
          <el-dropdown-item>数据</el-dropdown-item>
          <el-dropdown-item>策划</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown>
        <span class="el-dropdown-link" :class="{'scroll-active':needFixed}">
          摄影
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown" class="dropdown-content">
          <el-dropdown-item>后期</el-dropdown-item>
          <el-dropdown-item>风光</el-dropdown-item>
          <el-dropdown-item>人物</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown>
        <span class="el-dropdown-link" :class="{'scroll-active':needFixed}">
          小记
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown" class="dropdown-content">
          <el-dropdown-item>读书城南</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="search">
      <el-input placeholder="搜索"></el-input>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      needFixed: false,
      url: require("@/assets/logo.png")
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      let _this = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // console.log(scrollTop);
      if (scrollTop > 0) {
        _this.needFixed = true;
        _this.url = require('@/assets/logo-white.png');
      } else {
        _this.needFixed = false;
        _this.url = require('@/assets/logo.png');
      }
    }
  }
};
</script>

<style scoped>
.header {
  margin-bottom: 20px;
  height: 66px;
  z-index: 999;
  position: relative;
  font-size: 14px;
  width: 100%;
  line-height: 66px;
  color: #000;
  background-color: #fff;
  box-shadow: 0 0 4px #e4e4e4;
}

.header-active {
  position: fixed;
  top: 0;
  background-color: #000;
  color: blanchedalmond;
  font-size: 14px;
  z-index: 999;
  line-height: 66px;
  height: 66px;
  width: 100%;
}
.logo {
  float: left;
  width: 20%;
  height: 66px;
}

.nav {
  float: left;
  width: 60%;
  height: 66px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.search {
  float: right;
  margin-right: 10px;
  height: 66px;
}
.el-dropdown {
  margin-left: 40px;
}

.el-dropdown-link {
  cursor: pointer;
  color: black;
  outline: 0;
}

.scroll-active {
  cursor: pointer;
  color: blanchedalmond;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-dropdown-menu__item:focus, .el-dropdown-menu__item:not(.is-disabled):hover {
    background-color: #000;
    color: #fff;
    /* border-bottom: 1px solid black; */
}
.el-pager li.active {
    cursor: default;
    color: #67c23a;
}
</style>