<template>
  <div>
    <el-button>ImChat</el-button>

    <div class="im-chat-main">
      <div class="messages" id="chat-message">
        <ul>
          <li
            v-for="(item, index) in messageList"
            :key="index"
            :class="{ 'im-chat-mine': item.mine }"
          >
            <div class="im-chat-user" id="messageBox">
              <img :src="[item.avatar]" />
              <cite v-if="item.mine"><i>{{ item.timestamp }}</i>{{ item.username }}</cite>
              <cite v-if="!item.mine">{{ item.username }}<i>{{ item.timestamp }}</i></cite>
            </div>
            <div class="im-chat-text">
              <pre
                v-html="item.content"
              ></pre>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImChat",
  data() {
    return {
      messageList: [
        {
          id: 0,
          avatar:
            "http://m.imeitou.com/uploads/allimg/2020111112/nuezp3yreh1.jpg",
          mine: false,
          content: "msg",
          timestamp: "20201202",
        },
        {
          id: 1,
          avatar:
            "http://m.imeitou.com/uploads/allimg/2020111112/nuezp3yreh1.jpg",
          mine: true,
          content: "msg",
          timestamp: "20201202",
        },
        {
          id: 2,
          avatar:
            "http://m.imeitou.com/uploads/allimg/2020111112/nuezp3yreh1.jpg",
          mine: false,
          content: "msg",
          timestamp: "20201202",
        },
      ],
    };
  },
};
</script>

<style scoped>
.im-chat-main {
  flex: 1;
  display: flex;
  flex-direction: row;
  height: calc(100% - 40px);
}

.im-chat-main .im-chat-users {
  flex: 1;
  border-left: 1px solid #cccccc;
  overflow-y: scroll;
}
.im-chat-main .messages {
  width: 100%;
  height: calc(100% - 3rem);
  overflow-y: scroll;
}

.im-chat-main .messages ul {
  width: 100%;
}

.im-chat-main .messages ul li {
  position: relative;
  font-size: 0;
  margin-bottom: 10px;
  padding-left: 60px;
  min-height: 68px;
}

.im-chat-main .messages ul li .im-chat-text {
  position: relative;
  line-height: 22px;
  margin-top: 60px;
  padding: 1rem;
  background-color: #e2e2e2;
  border-radius: 3px;
  color: #333;
  word-break: break-all;
  display: table-cell;
  /* width: 20%; */
  vertical-align: top;
  font-size: 14px;
}

.im-chat-main .messages ul li .im-chat-text::after {
  content: "";
  position: absolute;
  left: -10px;
  top: 13px;
  width: 0;
  height: 0;
  border-style: solid dashed dashed;
  border-color: #e2e2e2 transparent transparent;
  overflow: hidden;
  border-width: 10px;
}
.im-chat-main .messages ul li .im-chat-text pre {
  width: 100%;
  white-space: pre-wrap;
  word-break: break-all;
}
.im-chat-main .messages ul li .im-chat-text pre img {
  display: block;
}
.im-chat-main .messages .im-chat-user {
  width: 4rem;
  height: 4rem;
  position: absolute;
  display: inline-block;
  vertical-align: top;
  font-size: 14px;
  left: 3px;
  right: auto;
}

.im-chat-main .messages .im-chat-user cite {
  position: absolute;
  left: 60px;
  top: -2px;
  width: 50px;
  line-height: 24px;
  font-size: 12px;
  white-space: nowrap;
  color: #999;
  text-align: left;
  font-style: normal;
}

.im-chat-main .messages .im-chat-user cite i {
  font-style: normal;
  padding-left: 15px;
}

.im-chat-main .messages .im-chat-user img {
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
}

.im-chat-main .messages .im-chat-mine {
  text-align: right;
  padding-left: 0;
  padding-right: 60px;
}

.im-chat-main .messages .im-chat-mine .im-chat-text {
  margin-left: 0;
  text-align: left;
  background-color: #000;
  color: #fff;
  display: inline-block;
  margin-top: 30px;
  margin-right: 30px;
  vertical-align: top;
  font-size: 14px;
}

.im-chat-main .messages .im-chat-mine .im-chat-text::after {
  left: auto;
  right: -10px;
  border-top-color: #000;
}

.im-chat-main .messages .im-chat-mine .im-chat-user {
  left: auto;
  right: 3px;
}

.im-chat-main .messages .im-chat-mine .im-chat-user cite {
  left: auto;
  right: 60px;
  text-align: right;
}

.im-chat-main .messages .im-chat-mine .im-chat-user cite i {
  padding-left: 0;
  padding-right: 15px;
}
</style>