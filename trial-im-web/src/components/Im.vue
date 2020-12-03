<template>
  <div>
    <div class="chat-window" style="height: 800px">
      <div class="chat-title">与厉害的对话</div>
      <div class="msg-list"  v-for="(msg,index) in messages" :key="index"> 

        <div class="lchat-msg" :style="{display: msg.issend? none:''}">
          <img
            class="lavatar"
            :src="msg.avatar"
          />
          <div class="lmsg">
            <div class="lmsg-time"><span style="color:#666;font-size: small;margin-right:10px">{{msg.username}}</span>{{msg.timestmp}}</div>
            <div class="lmsg-content">{{msg.content}}</div>
          </div>
        </div>

        <div class="rchat-msg" :style="{display: msg.issend? '':none}">
          <div class="rmsg">
            <div class="rmsg-time">{{msg.timestmp}}<span style="color:#666;font-size: small;margin-left:10px">{{msg.username}}</span></div>
            <div class="rmsg-content">{{msg.content}}</div>
          </div>
          <img
            class="ravatar"
            :src="msg.avatar"
          />
        </div>
      </div>

      <div class="send-input">
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Im",
  data() {
    return {
      none:"none",
      messages:[
        {
          issend:true,
          username:"巧克",
          avatar:"https://up.enterdesk.com/edpic_source/42/7d/72/427d72b831d61616098dbca1488bcb3c.jpg",
          content:"你好呀！！！",
          timestmp:"20201202"
        },
        {
          issend:false,
          username:"厉害",
          avatar:"https://up.enterdesk.com/edpic_source/42/7d/72/427d72b831d61616098dbca1488bcb3c.jpg",
          content:"你好呀！！！",
          timestmp:"20201202"
        },
        {
          issend:true,
          username:"巧克",
          avatar:"https://up.enterdesk.com/edpic_source/42/7d/72/427d72b831d61616098dbca1488bcb3c.jpg",
          content:"这是又一条消息",
          timestmp:"20201202"
        },
        {
          issend:false,
          username:"厉害",
          avatar:"https://up.enterdesk.com/edpic_source/42/7d/72/427d72b831d61616098dbca1488bcb3c.jpg",
          content:"好的我收到了",
          timestmp:"20201202"
        },
      ],
    }
  },
  methods: {
    // getMsg(){

    // }
    
  },
  mounted() {
    // getMsg()
    
  },
  created() {
    
  },
};
</script>

<style scoped>
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