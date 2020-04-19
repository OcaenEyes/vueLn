<template>
  <div class="article-list">
    <div class="title">
      <h3>文章列表</h3>
    </div>
    <el-row>
      <el-col v-for="(i) in 10" :key="i">
        <el-card>
          <div class="article-item">
            <div class="thumb">
              <el-image
                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                class="thumb-image"
              ></el-image>
            </div>
            <div class="intro">
              <div class="summary">
                木之就规矩，在梓匠轮舆。人之能为人，由腹有诗书。
                诗书勤乃有，不勤腹空虚。欲知学之力，贤愚同一初。
                由其不能学，所入遂异闾。两家各生子，提孩巧相如。
                少长聚嬉戏，不殊同队鱼。年至十二三，头角稍相疏。
                二十渐乖张，清沟映污渠。三十骨骼成，乃一龙一猪。
                飞黄腾踏去，不能顾蟾蜍。一为马前卒，鞭背生虫蛆。
                一为公与相，潭潭府中居。问之何因尔，学与不学欤。
                金璧虽重宝，费用难贮储。学问藏之身，身在则有余。
                君子与小人，不系父母且。不见公与相，起身自犁鉏。
                不见三公后，寒饥出无驴。文章岂不贵，经训乃菑畲。
                潢潦无根源，朝满夕已除。
              </div>
              <div class="info">
                <div class="user">
                  <i class="el-icon-user"></i>
                  <span>GZY</span>
                </div>
                <div class="tags">
                  <el-tag
                    size="mini"
                    type="success"
                    style="margin-right:6px"
                    v-for="item in tags"
                    :key="item.name"
                  >{{item.name}}</el-tag>
                </div>
                <div class="categories">
                  <el-tag
                    size="mini"
                    type="success"
                    style="margin-right:6px"
                    v-for="item in tags"
                    :key="item.name"
                  >{{item.name}}</el-tag>
                </div>
                <div class="date">
                  <i class="el-icon-time"></i>
                  2020-04-19 13:10</div>
                <div class="views">
                  <i class="el-icon-view"></i>
                  2333
                </div>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000"></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: [{ name: "产品" }, { name: "数据" }, { name: "内容" }]
    };
  }
};
</script>

<style scoped>
.el-card {
  margin-top: 14px;
}
.article-list {
  margin-top: 20px;
}
.title {
  text-align: left;
}
.article-item {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.thumb-image {
  width: 200px;
}
.intro {
  width: 68%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 14px;
  line-height: 28px;
  text-align: left;
}
.info {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.user {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
</style>