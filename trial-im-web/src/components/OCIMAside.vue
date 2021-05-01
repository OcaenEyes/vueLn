<template>
  <div>
    <div class="asidetools">
      <div>
        <el-image
          style="width: 40px; height: 40px; border-radius: 20px"
          src="https://up.enterdesk.com/edpic_source/42/7d/72/427d72b831d61616098dbca1488bcb3c.jpg"
        ></el-image>
      </div>
      <div>
        <router-link :to="{ path: '/msgView/msgItem/' + id }">
          <i style="font-size: 24px" class="el-icon-chat-dot-round"></i>
        </router-link>
      </div>
      <div>
        <router-link :to="{ name: 'FriendView' }">
          <i style="font-size: 24px" class="el-icon-user"></i>
        </router-link>
      </div>
      <div>
        <router-link :to="{ name: 'CollectionView' }">
          <i style="font-size: 24px" class="el-icon-star-off"></i>
        </router-link>
      </div>
      <div>
        <router-link :to="{ name: 'FileView' }">
          <i style="font-size: 24px" class="el-icon-folder"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
    };
  },
  watch: {
    $route() {
      var chatInfosRes = [];
      chatInfosRes = JSON.parse(sessionStorage.getItem("chatInfos"));
      if (chatInfosRes != null) {
        if (chatInfosRes.length > 0) {
          if (chatInfosRes[chatInfosRes.length - 1].group) {
            this.id = chatInfosRes[chatInfosRes.length - 1].chatGroupId;
          } else {
            this.id = chatInfosRes[chatInfosRes.length - 1].chatUserId;
          }
        }
      }
    },
  },
};
</script>
<style scoped>
.asidetools {
  height: 300px;
  margin-top: 24px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>