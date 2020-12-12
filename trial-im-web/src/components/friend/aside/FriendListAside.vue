<template>
  <el-container>
    <el-header>
      <div class="search">
        <el-input type="text" placeholder="请输入内容"></el-input>
        <button class="creategroup">
          <i class="el-icon-plus"></i>
        </button>
      </div>
    </el-header>
    <el-main class="lfriendlist">
      <div class="friendlist">
        <div v-for="(i, index) in friendlists" :key="index">
          <router-link :to="{ name: 'FriendItemView', params: { id: index } }">
            <div class="friendlist-item">
              <div class="sendimg">
                <el-image
                  style="width: 32px; height: 32px; border-radius: 6px"
                  :src="i.headimg"
                ></el-image>
              </div>
              <div class="friend-thumb">
                <div class="friend-thumb-sender">
                  <b>{{ i.groupname ? i.groupname : i.receivename }}</b>
                </div>
              </div>
            </div>
          </router-link>
          <div class="line"></div>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  props: ["friendlists"],
  data() {
    return {
      count: 20,
      isgroup: null,
    };
  },
  methods: {},
  created() {
    console.log(this.friendlists[this.friendlists.length - 1]);
  },
};
</script>
<style scoped>
.lfriendlist {
  padding-top: 0;
  padding-bottom: 6px;
  padding-left: 14px;
  padding-right: 14px;
}
.lfriendlist::-webkit-scrollbar {
  display: none;
}
.creategroup {
  height: 22px;
  width: 22px;
  padding: 0;
  background-color: #fff;
  border: 0.5px solid #eee;
  margin-left: 8px;
  vertical-align: middle;
  text-align: center;
}
.creategroup:focus {
  height: 22px;
  width: 22px;
  padding: 0;
  background-color: #fff;
  border: 0.5px solid #eee !important;
  margin-left: 8px;
  vertical-align: middle;
  text-align: center;
  outline: none;
}
.search {
  display: flex;
  flex-direction: row;
  z-index: 1;
  border-bottom: 0.1px solid #eee;
  height: 56px;
  padding: 0 6px;
  align-items: center;
}
.search >>> .el-input__inner {
  border: 0.1px solid #eee;
  height: 30px !important ;
  border-radius: 30px !important;
}

.friendlist {
  overflow-y: auto;
}
.friendlist-item {
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
  background-color: #fff;
  text-align: left;
  max-width: 216px;
}
.friendlist-item:hover{
  background-color: #f0f0f0 !important;
}
.friend-thumb {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 14px;
  min-width: 80px;
  max-width: 152px;
}
.friend-thumb-sender {
  font-size: 16px;
  color:#333;
  overflow: hidden;
  min-width: 80px;
  max-width: 152px;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.line {
  width: 88%;
  height: 1px;
  margin-left: 6%;
  border-top: solid #eee 1px;
}
</style>