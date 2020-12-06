<template>
  <div>
    <div class="send-tool">
      <el-input type="textarea" class="msgin" v-model="msg"></el-input>
      <el-button class="msgsend" @click="sendMsg">发送</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
      messages:[],
    };
  },
  methods: {
    sendMsg() {
      let that = this;
      var msgData = null;
      if (this.msg != "") {
        msgData = {
          issend: true,
          username: "巧克",
          avatar:
            "https://up.enterdesk.com/edpic_source/42/7d/72/427d72b831d61616098dbca1488bcb3c.jpg",
          content: this.msg,
          timestmp: "20201202",
        };
        this.$ocSockApi.sendSocket(msgData, function (e) {
          that.messages.push(e);
        });
        this.msg = "";
      }
    },
  },
};
</script>
<style scoped>
.send-tool {
  display: flex;
  flex-direction: row;
  z-index: 1;
  padding: 0;
  height: 100px; 
}
.msgin >>>.el-textarea__inner{
  border: 1px solid #eee;
  min-height:100px !important;
  height:100px !important ;
  border-radius: 0 !important;
  resize: none !important ;
  overflow: auto !important;
}

.msgsend{
  border: none;
  background-color: #eee; 
  color: #333;
}
.msgsend:hover ,.msgsend:active,.msgsend:visited,.msgsend:focus{
  border: none;
  background-color: #eee; 
  color: #333;
}
</style>