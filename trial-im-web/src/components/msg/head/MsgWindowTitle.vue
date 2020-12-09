<template>
    <div>
        <div class="chat-title">{{username}}</div>
    </div>
</template>

<script>
export default {
    props: ["username"]
}
</script>
<style scoped>
.chat-title {
  height: 56px;
  line-height: 56px;
  font-weight: 500;
  font-size: 18px;
  margin-left: 10px;
}
</style>