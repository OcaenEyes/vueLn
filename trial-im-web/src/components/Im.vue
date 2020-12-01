<template>
  <div class="view-wrapper">
    <cube-recycle-list
      class="list"
      :size="size"
      :on-fetch="onFetch"
      :offset="offset"
    >
      <template slot="item" slot-scope="{ data }">
        <div :id="data.id" class="item" @click="handleClick(data)">
          <div
            class="avatar"
            :style="{ backgroundImage: 'url(' + (data.avatar || '') + ')' }"
          ></div>
          <div class="bubble">
            <p>{{ data.msg }}</p>
            <div class="meta">
              <time class="posted-date">{{ data.time }}</time>
            </div>
          </div>
        </div>
      </template>
    </cube-recycle-list>
  </div>
</template>

<script>
export default {
  name: "Im",
  data() {
    return {
      initTime: new Date().getTime(),
      size: 50,
      offset: 100,
    };
  },
  methods: {
    onFetch() {
      let items = [];
      return new Promise((resolve) => {
        // 模拟请求 50 条数据，因为 size 设置为 50
        setTimeout(() => {
          for (let i = 0; i < 50; i++) {
            items.push({
              id: i,
              avatar:
                "http://m.imeitou.com/uploads/allimg/2020111112/nuezp3yreh1.jpg",
              msg: 'msg',
              time:  new Date(Math.floor(this.initTime + i * this.size * 1000 + Math.random() * this.size * 1000)).toString(),
            });
          }
          resolve(items);
        }, 1000);
      });
    },
    handleClick(data) {
      console.log("Item:" + data);
    },
  },
};
</script>

<style scoped>
/* 限制视口 包裹组件*/
.view-wrapper {
  position: fixed;
  top: 54px;
  left: 0;
  bottom: 0;
  width: 100%;
}
.list {
  margin: 0 auto;
  padding: 0;
  border: 1px solid #ddd;
  list-style-type: none;
  text-align: center;
  background: #eee;
}
.item {
  display: flex;
  padding: 10px 0;
  width: 100%;
  text-align: left;
}
.avatar {
  border-radius: 50%;
  margin-left: 15px;
  margin-right: 6px;
  min-width: 48px;
  width: 48px;
  height: 48px;
  /* background-image: url('./unknown.jpg') */
  background-size: cover;
  outline: none;
}
p {
  margin: 0;
  word-wrap: break-word;
  font-size: 14px;
}

.tombstone p {
  width: 100%;
  height: 0.5em;
  background-color: #ccc;
  margin: 0.5em 0;
}
.bubble {
  padding: 7px 10px;
  color: #333;
  background: #fff;
  box-shadow: 0 3px 2px rgba(0, 0, 0, 0.1);
  position: relative;
  max-width: 420px;
  min-width: 80px;
  margin: 0 20px 0 5px;
}

.bubble:before {
  content: "";
  border-style: solid;
  border-width: 0 10px 10px 0;
  border-color: transparent #fff transparent transparent;
  position: absolute;
  top: 0;
  left: -10px;
}

.meta {
  font-size: 0.8rem;
  color: #999;
  margin-top: 3px;
}
</style>