<template>
  <div class="chat">
    <div class="chat-title">与厉害的对话</div>
    <div class="chat-window" :style="{ height: viewheight }">
      <div
        class="msg-window"
        :style="{ height: msgviewheight }"
        id="msg-window"
      >
        <ul class="infinite-list" style="height: 100%">
          <li
            class="infinite-list-item"
            v-for="(msg, index) in messages"
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
                <div class="lmsg-content">{{ msg.content }}</div>
              </div>
            </div>

            <div class="rchat-msg" :style="{ display: msg.issend ? '' : none }">
              <div class="rmsg">
                <div class="rmsg-time">
                  {{ msg.timestmp }}
                  <span
                    style="color: #666; font-size: small; margin-left: 10px"
                    >{{ msg.username }}</span
                  >
                </div>
                <div class="rmsg-content">{{ msg.content }}</div>
              </div>
              <img class="ravatar" :src="msg.avatar" />
            </div>
          </li>
        </ul>
      </div>

      <div class="send-window" style="height: 40px">
        <div class="send-tool">
          <el-input type="text" v-model="msg"></el-input>
          <el-button type="info" @click="sendMsg">发送</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Im",
  data() {
    return {
      none: "none",
      ws: null,
      msg:'',
      messages: [
        {
          issend: true,
          username: "巧克",
          avatar:
            "https://up.enterdesk.com/edpic_source/42/7d/72/427d72b831d61616098dbca1488bcb3c.jpg",
          content: "你好呀！！！",
          timestmp: "20201202",
        },
        {
          issend: false,
          username: "厉害",
          avatar:
            "https://up.enterdesk.com/edpic_source/42/7d/72/427d72b831d61616098dbca1488bcb3c.jpg",
          content: "你好呀！！！",
          timestmp: "20201202",
        },
        {
          issend: true,
          username: "巧克",
          avatar:
            "https://up.enterdesk.com/edpic_source/42/7d/72/427d72b831d61616098dbca1488bcb3c.jpg",
          content: "这是又一条消息",
          timestmp: "20201202",
        },
        {
          issend: true,
          username: "巧克",
          avatar:
            "https://up.enterdesk.com/edpic_source/42/7d/72/427d72b831d61616098dbca1488bcb3c.jpg",
          content: "你好呀！！！",
          timestmp: "20201202",
        },
        {
          issend: false,
          username: "厉害",
          avatar:
            "https://up.enterdesk.com/edpic_source/42/7d/72/427d72b831d61616098dbca1488bcb3c.jpg",
          content: "你好呀！！！",
          timestmp: "20201202",
        },
        {
          issend: true,
          username: "巧克",
          avatar:
            "https://up.enterdesk.com/edpic_source/42/7d/72/427d72b831d61616098dbca1488bcb3c.jpg",
          content: "这是又一条消息",
          timestmp: "20201202",
        },
        {
          issend: true,
          username: "巧克",
          avatar:
            "https://up.enterdesk.com/edpic_source/42/7d/72/427d72b831d61616098dbca1488bcb3c.jpg",
          content: "你好呀！！！",
          timestmp: "20201202",
        },
        {
          issend: false,
          username: "厉害",
          avatar:
            "https://up.enterdesk.com/edpic_source/42/7d/72/427d72b831d61616098dbca1488bcb3c.jpg",
          content: "你好呀！！！",
          timestmp: "20201202",
        },
        {
          issend: true,
          username: "巧克",
          avatar:
            "https://up.enterdesk.com/edpic_source/42/7d/72/427d72b831d61616098dbca1488bcb3c.jpg",
          content: "这是又一条消息",
          timestmp: "20201202",
        },
        {
          issend: true,
          username: "巧克",
          avatar:
            "https://up.enterdesk.com/edpic_source/42/7d/72/427d72b831d61616098dbca1488bcb3c.jpg",
          content: "你好呀！！！",
          timestmp: "20201202",
        },
        {
          issend: false,
          username: "厉害",
          avatar:
            "https://up.enterdesk.com/edpic_source/42/7d/72/427d72b831d61616098dbca1488bcb3c.jpg",
          content: "你好呀！！！",
          timestmp: "20201202",
        },
        {
          issend: true,
          username: "巧克",
          avatar:
            "https://up.enterdesk.com/edpic_source/42/7d/72/427d72b831d61616098dbca1488bcb3c.jpg",
          content: "这是又一条消息",
          timestmp: "20201202",
        },
      ],
      viewheight: "",
      msgviewheight: "",
    };
  },
  methods: {
    sendMsg() {
      if (this.msg != ''){
        console.log("发送消息");
        this.ws.send(this.msg);
        this.messages.push({
          issend: true,
          username: "巧克",
          avatar:
            "https://up.enterdesk.com/edpic_source/42/7d/72/427d72b831d61616098dbca1488bcb3c.jpg",
          content: this.msg,
          timestmp: "20201202",
        
        });
        this.msg='';
      }
    },
    initWebsocket() {
      let that = this;
      if (window.WebSocket) {
        var ws = new WebSocket("ws://localhost:8082/ws");
        that.ws = ws;
        //监听连接成功
        ws.onopen = function () {
          console.log("连接服务器成功");
          ws.send("你好"); //向服务器发送信息，这个地方我是先把每一个访问的user都先存储起来方便实现1对1对话
        };
        //监听连接失败
        ws.onclose = function () {
          console.log("服务器关闭");
        };
        //监听报错
        ws.onerror = function () {
          console.log("连接出错");
        };
        // 接收服务器的消息
        ws.onmessage = function (e) {
          let message =e.data;
          console.log(message);
          that.messages.push({
            issend: false,
          username: "厉害",
          avatar:
            "https://up.enterdesk.com/edpic_source/42/7d/72/427d72b831d61616098dbca1488bcb3c.jpg",
          content: message,
          timestmp: "20201202",
          });
          console.log("收到服务器消息");
        };
      }
    },
    getMsg() {
      this.messages.push({
        issend: true,
        username: "巧克",
        avatar:
          "https://up.enterdesk.com/edpic_source/42/7d/72/427d72b831d61616098dbca1488bcb3c.jpg",
        content: "这是又一条消息",
        timestmp: "20201202",
      });
    },
    getHeight() {
      this.viewheight = window.innerHeight - 120 + "px";
      this.msgviewheight = window.innerHeight - 160 + "px";
      console.log("聊天窗");
      console.log(this.viewheight);
      console.log("消息框");
      console.log(this.msgviewheight);
    },
  },
  mounted() {},
  created() {
    this.getMsg();
    window.addEventListener("resize", this.getHeight);
    this.getHeight();
    this.sendMsg();
    this.initWebsocket();
  },
  watch: {
    messages() {
      console.log("messageList change");
      this.$nextTick(() => {
        var msgh = document.getElementById("msg-window");
        msgh.scrollTop = msgh.scrollHeight;
      });
    },
  },
};
</script>

<style scoped>
.send-tool {
  display: flex;
  flex-direction: row;
  z-index: 1;
}
.chat-title {
  height: 44px;
  line-height: 44px;
  font-weight: 500;
  font-size: 18px;
}
.msg-window {
  overflow-y: auto;
  background-color: turquoise;
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
  margin-left: 10px;
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
  margin-right: 10px;
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