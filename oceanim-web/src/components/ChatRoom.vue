<template>
  <div class="chatroom"></div>
</template>
<script>
export default {
  data() {
    return {
      websocket: null
    };
  },
  created() {
    this.initWebSocket();
  },

  methods: {
    //初始化websocket
    initWebSocket() {
      const wsuri = "ws://127.0.0.1:8888";
      this.websocket = new WebSocket(wsuri);
      console.log(this.websocket);
      this.websocket.onopen = this.websocketOnOpen;
      this.websocket.onmessage = this.websocketOnMessage;
      this.websocket.onerror = this.websocketOnError;
      this.websocket.onclose = this.websocketClose;
      console.log("初始化以后", this.websocket);
    },
    // 建立连接
    websocketOnOpen() {
      console.log("建立连接");
      this.websocketSend("1234");
    },
    websocketOnError() {
      this.websocket.close();
      //失败后重新连接
      this.initWebSocket();
    },
    websocketOnMessage(e) {
      console.log(JSON.parse(e.data));
    },
    websocketSend(data) {
      this.websocket.send(data);
    },
    websocketClose(e) {
      console.log("断开连接", e);
    }
  }
};
</script>
<style scoped>
</style>