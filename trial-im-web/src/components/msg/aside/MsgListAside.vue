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
    <el-main class="lmsglist">
      <div class="msglist">
        <div v-for="(i, index) in msglists" :key="index">
          <router-link :to="{name:'MsgItemView',params:{id:index}}">
          <div class="msglist-item">
            <div class="sendimg">
              <el-image
                style="width: 40px; height: 40px; border-radius: 6px"
                :src="i.headimg"
              ></el-image>
            </div>
            <div class="msg-thumb">
              <div class="msg-thumb-sender"><b>{{i.groupname ?i.groupname:i.receivename}}</b></div>
              <div class="msg-thumb-subdetial"><b>{{i.groupname?i.msgsumary[i.msgsumary.length -1].username + ": ":""}}</b> <span>{{i.msgsumary[i.msgsumary.length -1].content}}</span></div>
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
  props:["msglists"],
  data() {
    return {
      count: 20,
      isgroup:null,
    };
  },
  methods: {
    
  },
  created() {
    console.log(this.msglists[this.msglists.length-1]);
  },
};
</script>
<style scoped>
.lmsglist {
  padding: 6px 12px;
}
.lmsglist::-webkit-scrollbar {
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

.msglist {
  overflow-y: auto;
}
.msglist-item {
  height: 68px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
  background-color: #fff;
}
.msg-thumb {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 14px;
}
.msg-thumb-sender {
  font-size: 16px;
  margin-bottom: 5px;
}
.msg-thumb-subdetial {
  font-size: 14px;
  margin-top: 5px;
  color: rgb(138, 136, 136);
}
.line {
  width: 80%;
  height: 1px;
  margin-left: 10%;
  border-top: solid #eee 1px;
}
</style>