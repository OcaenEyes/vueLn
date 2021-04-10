<template>
  <el-container>
    <el-header class="msgwindowtitle">
      <div class="chat-title">{{ username }}</div>
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
            <div class="lchat-msg" :style="{ display: msg.issend ? none : '' }">
              <img class="lavatar" :src="msg.avatar" />
              <div class="lmsg">
                <div class="lmsg-time">
                  <span
                    style="color: #666; font-size: small; margin-right: 10px"
                    >{{ msg.username }}</span
                  >{{ msg.timestmp }}
                </div>
                <div class="lmsg-content">{{ msg.msgDetail }}</div>
              </div>
            </div>

            <div class="rchat-msg" :style="{ display: msg.issend ? '' : none }">
              <div class="rmsg">
                <div class="rmsg-time">
                  {{ msg.msgTime }}
                  <span
                    style="color: #666; font-size: small; margin-left: 10px"
                    >{{ msg.username }}</span
                  >
                </div>
                <div class="rmsg-content">{{ msg.msgDetail }}</div>
              </div>
              <img class="ravatar" :src="msg.avatar" />
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
  props: ["msglists"],
  data() {
    return {
      viewheight: "",
      username: null,
      none: "none",
      ws: null,
      sendmsg: "",
      msgviewheight: "",
      msgsumary: null,
    };
  },
  methods: {
    getHeight() {
      this.viewheight = window.innerHeight - 120 + "px";
      this.msgviewheight = window.innerHeight - 320 + "px";
      console.log("聊天窗");
      console.log(this.viewheight);
      console.log("消息框");
      console.log(this.msgviewheight);
    },
    sendMsg() {
      let that = this;
      var msgData = null;
      if (this.sendmsg != "") {
        msgData = {
          isgroup: false,
          issend: true,
          msgType: "single",
          receiverId: "1450136519",
          senderId: "1450136519",
          msgDetail: this.sendmsg,
          msgTime: "20201202",
        };
        console.log(msgData);
        this.$ocSockApi.sendSocket(msgData, function (e) {
          that.msglists[that.$route.params.id]["msgsumary"].push(e);
        });
      }
      this.sendmsg = "";
    },
  },
  created() {
    window.addEventListener("resize", this.getHeight);
    this.getHeight();
    // console.log("创建时");
    console.log(this.$route.params.id);
    // console.log(this.msglists);
    // console.log(this.msglists);
    this.msgsumary = this.msglists[this.$route.params.id]["msgsumary"];
    this.username = this.msglists[this.$route.params.id]["isgroup"]
      ? this.msglists[this.$route.params.id]["groupname"]
      : this.msglists[this.$route.params.id]["receivename"];
    console.log(this.msgsumary);
  },
  watch: {
    $route() {
      console.log("路由变化时");
      console.log(this.$route.params.id);
      this.msgsumary = this.msglists[this.$route.params.id]["msgsumary"];
      this.username = this.msglists[this.$route.params.id]["isgroup"]
        ? this.msglists[this.$route.params.id]["groupname"]
        : this.msglists[this.$route.params.id]["receivename"];
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
  display: none;
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
  padding: 0 10px 0 10px;
}
.lavatar {
  width: 30px;
  height: 30px;
  border-radius: 15px;
}
.ravatar {
  width: 30px;
  height: 30px;
  border-radius: 15px;
}
</style>