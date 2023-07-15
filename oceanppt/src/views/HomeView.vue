<!--
 * @Author: OCEAN.GZY
 * @Date: 2023-07-14 16:16:31
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2023-07-15 15:12:19
 * @FilePath: /oceanppt/src/views/HomeView.vue
 * @Description: 注释信息
-->
<template>
    <div class="home-view">
        <LeftView class="left" @inputs-back="inputsBack"></LeftView>
        <RightView class="right" :res="res"></RightView>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import LeftView from "./LeftView.vue"
import RightView from "./RightView.vue"

var res = ref('## ❤️OCEAN-PPT❤️ \n SHOW出你的IDEA~');
const inputsBack = (data) => {
    console.log("收到子组件的消息", data);
    res.value = data;
}

</script>

<style scoped  lang="less">
.home-view {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 100%;

    .left {
        width: 220px;
        border-radius:20px;
        height: 90% !important;
        background-color: #090d10;
        margin-left: 10px;
        margin-right: 10px;
        box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.2);
        padding-top: 0px;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 20px;
        overflow-y: scroll;
    }

    .right {
        // width: 78%;
        flex:1;
        height: 90% !important;
        background-color: #090d10;
        border-radius: 20px;
        margin-right: 10px;
        overflow-y: scroll;
        border-color: transparent;
        box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.2);
        padding: 10px;
    }
}
</style>
