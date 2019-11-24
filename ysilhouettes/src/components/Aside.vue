<template>
  <el-container>
    <el-main>
      <el-card shadow="hover">
        <div class="card-title" >
          <i class="el-icon-user"></i>&nbsp;&nbsp;
          <span>基本信息</span>
          <!-- <i class="el-icon-view" style="float:right;"></i> -->
        </div>
        <el-collapse-transition>
          <div v-show="showprofile">
            <div class="myprofile">
              <div class="head-portrait">
                <el-avatar :size="80" fit="fit" style="margin-top:8px;margin-bottom:8px;">
                  <img src="../assets/head.png" />
                </el-avatar>
              </div>
              <div>
                <el-tag
                  type="warning"
                  style="font-size: 12px"
                >姓名：&nbsp;&nbsp;{{info.name}}</el-tag>
              </div>
              <div>
                <el-tag
                  type="success"
                  style="font-size: 12px"
                >电话：&nbsp;&nbsp;{{info.phone}}</el-tag>
              </div>
              <div>
                <a :href="'mailto:'+ info.email">
                <el-tag type style="font-size: 12px">邮箱：&nbsp;&nbsp;{{info.email}}</el-tag>
                </a>
              </div>
              <div>
                <a :href="info.blog" target="_Blank"><el-tag
                  type="success"
                  style="font-size: 12px;"
                >博客：&nbsp;&nbsp;{{info.blog}}</el-tag></a>
              </div>
              <div>
                <a :href="info.website" target="_Blank">
                <el-tag
                  type="warning"
                  style="font-size: 12px"
                >网站：&nbsp;&nbsp;{{info.website}}</el-tag></a>
              </div>
            </div>
          </div>
        </el-collapse-transition>
      </el-card>

      <el-card shadow="hover">
        <div class="card-title" >
          <i class="el-icon-paperclip"></i>&nbsp;&nbsp;
          <span>技能</span>
          <!-- <i class="el-icon-view" style="float:right;"></i> -->
        </div>

        <el-collapse-transition>
          <div v-show="showskills">
            <div class="skills" v-for="(skill,index) in skills" :key="index">
              <el-tag style="font-size:12px;">{{skill.s_name}}</el-tag>
              <el-progress :percentage="skill.s_grade" style="width:68%;"></el-progress>
            </div>
          </div>
        </el-collapse-transition>
      </el-card>
    </el-main>
  </el-container>
</template>

<style scoped>
.el-main {
  padding: 10px;
  opacity: 0.98;
}
.head-portrait {
  align-content: center;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #f1f1f1;
}
.el-card {
  margin-bottom: 6px;
}
.skills {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  margin-top: 16px;
  font-size: 12px;
}
.card-title {
  font-weight: bold;
}
.myprofile {
  display: flex;
  flex-direction: column;
}
.myprofile div {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 14px;
}
</style>

<script>
export default {
  name: "Aside",

  data() {
    return {
      showprofile: true,
      showskills: true,
      info: {
        id: null,
        name: null,
        phone: null,
        email: null,
        blog: null,
        website: null
      },
      skills: null
    };
  },
  created() {
    this.getResume();
    this.getSkills();
  },
  methods: {
    getResume() {
      this.$http
        .get("/api/getresume", {
          params: {
            id: 1
          }
        })
        .then(res => (this.info = res.data.results[0]));
    },
    getSkills() {
      this.$http
        .get("/api/getskills", {
          params: {
            id: 1
          }
        })
        .then(res => (this.skills = res.data.results));
    }
  }
};
</script>