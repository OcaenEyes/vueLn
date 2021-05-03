<template>
  <el-container>
    <el-header class="msgwindowtitle">
      <div class="chat-title">{{ msgtitle }}</div>
    </el-header>
    <el-main>
      <div
        class="msg-window"
        :style="{ height: msgviewheight }"
        id="msg-window"
      >
        <ul class="infinite-list">
          <li
            class="infinite-list-item"
            v-for="(msg, index) in msgsumary"
            :key="index"
          >
            <div
              class="lchat-msg"
              :style="{
                display: msg.senderId == myUserInfo.userId ? 'none' : '',
              }"
            >
              <el-avatar size="medium" src="">{{
                msg.senderNickName
              }}</el-avatar>
              <div class="lmsg">
                <div class="lmsg-time">
                  <span
                    style="color: #666; font-size: 8px; margin-right: 10px"
                    >{{ msg.senderNickName }}</span
                  >{{ msg.msgTime }}
                </div>
                <div class="lmsg-content">{{ msg.msgDetail }}</div>
              </div>
            </div>

            <div
              class="rchat-msg"
              :style="{
                display: msg.senderId == myUserInfo.userId ? '' : 'none',
              }"
            >
              <div class="rmsg">
                <div class="rmsg-time">
                  {{ msg.msgTime }}
                  <span
                    style="color: #666; font-size: 8px; margin-left: 10px"
                    >{{ msg.senderNickName }}</span
                  >
                </div>
                <div class="rmsg-content">{{ msg.msgDetail }}</div>
              </div>
              <el-avatar size="medium" src="">{{
                msg.senderNickName
              }}</el-avatar>
            </div>
          </li>
        </ul>
      </div>
    </el-main>
    <el-footer>
      <div class="send-tool">
        <el-input
          type="textarea"
          class="msgin"
          v-model="sendmsg"
          @keypress.enter.native="sendMsg"
        ></el-input>
        <el-button class="msgsend" @click="sendMsg">发送</el-button>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  props: ["chatInfos", "myUserInfo"],
  data() {
    return {
      msgtitle: "",
      viewheight: "",
      sendmsg: "",
      msgviewheight: "",
      msgsumary: null,
    };
  },
  methods: {
    getHeight() {
      this.viewheight = window.innerHeight - 120 + "px";
      this.msgviewheight = window.innerHeight - 280 + "px";
      console.log("聊天窗");
      console.log(this.viewheight);
      console.log("消息框");
      console.log(this.msgviewheight);
    },
    sendMsg() {
      let that = this;
      var msgData = null;
      this.chatInfos.forEach((chatInfo) => {
        if (that.$route.params.id == chatInfo.chatUserId) {
          if (that.sendmsg != "") {
            msgData = {
              action: "1",
              message: {
                senderId: that.myUserInfo.userId,
                senderNickName: that.myUserInfo.nickName,
                receiverId: chatInfo.chatUserId,
                receiverNickName: chatInfo.chatUserName,
                group: false,
                msgDetail: that.sendmsg,
                groupCid: "",
                msgTime: new Date(),
              },
              extend: "",
            };
            console.log(msgData);
            that.$ocSockApi.sendSocket(msgData, function (msgData) {
              that.msgsumary.push(msgData.message);
            });
          }
          that.sendmsg = "";
        } else if (that.$route.params.id == chatInfo.chatGroupId) {
          if (that.sendmsg != "") {
            msgData = {
              action: "1",
              message: {
                senderId: that.myUserInfo.userId,
                senderNickName: that.myUserInfo.nickName,
                receiverId: "",
                receiverNickName: "",
                group: true,
                groupCid: chatInfo.chatGroupId,
                msgDetail: that.sendmsg,
                msgTime: new Date(),
              },
              extend: "",
            };
            console.log(msgData);
            that.$ocSockApi.sendSocket(msgData, function (msgData) {
              that.msgsumary.push(msgData.message);
            });
          }
          that.sendmsg = "";
        }
      });
    },
  },
  created() {
    window.addEventListener("resize", this.getHeight);
    this.getHeight();
    console.log(this.$route.params.id);
    if (this.chatInfos.length > 0) {
      this.chatInfos.forEach((chatInfo) => {
        if (this.$route.params.id == chatInfo.chatUserId) {
          this.msgsumary = chatInfo["chatUserMsgs"];
          this.msgtitle = chatInfo["chatUserName"];
        } else if (this.$route.params.id == chatInfo.chatGroupId) {
          this.msgsumary = chatInfo["chatGroupMsgs"];
          this.msgtitle = chatInfo["chatGroupName"];
        }
      });
    }

    console.log(this.msgsumary);
  },
  watch: {
    $route() {
      console.log("路由变化时");
      console.log(this.$route.params.id);
      if (this.chatInfos.length > 0) {
        this.chatInfos.forEach((chatInfo) => {
          if (this.$route.params.id == chatInfo.chatUserId) {
            this.msgsumary = chatInfo["chatUserMsgs"];
            this.msgtitle = chatInfo["chatUserName"];
          } else if (this.$route.params.id == chatInfo.chatGroupId) {
            this.msgsumary = chatInfo["chatGroupMsgs"];
            this.msgtitle = chatInfo["chatGroupName"];
          }
        });
      }
    },
    msgsumary() {
      console.log("msgsumary change");
      this.$nextTick(() => {
        var msgh = document.getElementById("msg-window");
        msgh.scrollTop = msgh.scrollHeight;
      });
    },
  },
};
</script>

<style scoped>
.msgwindowtitle {
  background-color: #fff;
  color: rgb(0, 0, 0);
  text-align: left;
  line-height: 56px;
  height: 56px;
  border-bottom: 0.1px solid #eee;
  border-left: 0.1px solid #eee;
  border-top: 0.1px solid #eee;
}
.el-footer {
  background-color: #eee;
  color: #333;
  text-align: center;
  height: 100px !important;
  padding: 0;
}
.el-main {
  background-color: #f4f4f4;
  color: #333;
  text-align: center;
  overflow-y: auto;
  padding: 10px;
  border-left: 0.1px solid #eee;
}
.el-main::-webkit-scrollbar {
  display: none;
}
.send-tool {
  display: flex;
  flex-direction: row;
  z-index: 1;
  padding: 0;
  height: 100px;
}
.msgin >>> .el-textarea__inner {
  border: 0.1px solid #eee;
  min-height: 100px !important;
  height: 100px !important ;
  border-radius: 0 !important;
  resize: none !important ;
  overflow: auto !important;
}

.msgsend {
  border: none;
  background-color: #eee;
  color: #333;
}
.msgsend:hover,
.msgsend:active,
.msgsend:visited,
.msgsend:focus {
  border: none;
  background-color: #eee;
  color: #333;
}
.msg-window {
  overflow-y: auto;
  /* background-color: turquoise; */
  /* padding: 6px 0 6px 0; */
}
.msg-window::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
.msg-window::-webkit-scrollbar-thumb {
  border-radius: 6px;
  background-color: rgb(224, 224, 224);
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.lchat-msg {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  align-content: center;
  min-height: 36px;
  /* margin-left: 10px; */
  margin-bottom: 5px;
}
.lmsg {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 36px;
  margin-left: 10px;
}
.lmsg-time {
  font-size: 4px;
  padding: 10px 0 10px 0;
  color: #a0a0a0;
}
.lmsg-content {
  word-break: break-all;
  background: #d3dce6;
  border-radius: 6px;
  text-align: center;
  line-height: 36px;
  font-size: 14px;
  padding: 0 10px 0 10px;
}

.rchat-msg {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-content: center;
  min-height: 36px;
  /* margin-right: 10px; */
  align-items: flex-end;
  margin-bottom: 5px;
}
.rmsg {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 10px;
}
.rmsg-time {
  font-size: 4px;
  padding: 10px 0 10px 0;
  color: #a0a0a0;
}
.rmsg-content {
  background: #5fb948;
  word-break: break-all;
  min-height: 36px;
  border-radius: 6px;
  text-align: center;
  line-height: 36px;
  font-size: 14px;
  padding: 0 10px 0 10px;
}
</style>