<template>
  <div>
    <div class="chat-window" style="height: 800px">
      <div class="chat-title">与GZY的对话</div>
      <div class="msg-list" style="height: 600px">
        <div class="lchat-msg">
          <img
            class="avatar"
            src="https://up.enterdesk.com/edpic_source/42/7d/72/427d72b831d61616098dbca1488bcb3c.jpg"
          />
          <div class="lmsg">
            <div class="lmsg-time">20201201 23:01</div>
            <div class="lmsg-content">12121</div>
          </div>
        </div>

        <div class="rchat-msg">
          <div class="rmsg">
            <div class="rmsg-time">20201201 23:01</div>
            <div class="rmsg-content">12121</div>
          </div>
          <img
            class="avatar"
            src="https://up.enterdesk.com/edpic_source/42/7d/72/427d72b831d61616098dbca1488bcb3c.jpg"
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
  max-width: 66%;
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
  max-width: 66%;
  min-height: 36px;
  border-radius: 6px;
  text-align: center;
  line-height: 36px;
  padding: 0 10px 0 10px;
}
.avatar {
  width: 30px;
  height: 30px;
  border-radius: 15px;
}

</style>