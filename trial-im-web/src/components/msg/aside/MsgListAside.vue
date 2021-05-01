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
        <div v-for="(i, index) in chatInfos" :key="index">
          <router-link
            :to="{
              name: 'MsgItemView',
              params: { id: i.group ? i.chatGroupId : i.chatUserId },
            }"
          >
            <div class="msglist-item">
              <div class="sendimg">
                <el-avatar
                  size="medium"
                  :src="i.group ? i.chatGroupHeadImg : i.chatUserHeadImg"
                >
                  {{ i.group ? i.chatGroupName : i.chatUserName }}
                </el-avatar>
                <!-- <el-image
                    style="width: 32px; height: 32px; border-radius: 6px"
                    :src="i.group ? i.chatGroupHeadImg : i.chatUserHeadImg"
                  ></el-image> -->
              </div>
              <div class="msg-thumb">
                <div class="msg-thumb-sender">
                  <b>{{ i.group ? i.chatGroupName : i.chatUserName }}</b>
                </div>
                <div class="msg-thumb-subdetial">
                  <b>{{
                    i.group
                      ? i.chatGroupMsgs[i.chatGroupMsgs.length - 1]
                          .senderNickName + ": "
                      : ""
                  }}</b>
                  <span>{{
                    i.group
                      ? i.chatGroupMsgs[i.chatGroupMsgs.length - 1].msgDetail
                      : i.chatUserMsgs[i.chatUserMsgs.length - 1].msgDetail
                  }}</span>
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
  props: ["chatInfos"],
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>
<style scoped>
.lmsglist {
  padding-top: 0;
  padding-bottom: 6px;
  padding-left: 14px;
  padding-right: 14px;
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
  overflow-x: hidden;
}
.msglist::-webkit-scrollbar {
  display: none;
}
.msglist-item {
  height: 56px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
  background-color: #fff;
  text-align: left;
  max-width: 216px;
}
.msglist-item ::-webkit-scrollbar {
  display: none;
}
.msglist-item:hover {
  background-color: #f0f0f0 !important;
}
.msglist-item:active {
  background-color: #f0f0f0 !important;
}
.msg-thumb {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 14px;
  padding-top: 10px;
  padding-bottom: 10px;
  min-width: 80px;
  max-width: 152px;
}
.msg-thumb-sender {
  font-size: 16px;
  margin-bottom: 5px;
  color: #333;
  font-weight: bold;
  overflow: hidden;
  min-width: 80px;
  max-width: 152px;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.msg-thumb-subdetial {
  font-size: 12px;
  margin-top: 5px;
  color: rgb(138, 136, 136);
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
  border-top: solid rgb(226, 226, 226) 0.1px;
}
</style>