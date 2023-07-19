<!--
 * @Author: OCEAN.GZY
 * @Date: 2023-07-14 16:16:31
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2023-07-19 16:07:23
 * @FilePath: /oceanppt/src/views/HomeView.vue
 * @Description: 注释信息
-->
<template>
    <div class="home-view">
        <LeftView class="left" @inputs-back="inputsBack" @chagePttPage="chagePttPage"></LeftView>
        <RightView class="right" :res="res" :pdata="pdata"></RightView>
        
    </div>
</template>

<script setup>
import { ref } from 'vue'
import LeftView from "./LeftView.vue"
import RightView from "./RightView.vue"
import store from '../store/index.js'

var res = ref('## ❤️OCEAN-PPT❤️ \n SHOW出你的IDEA~');
var pdata = ref({});
store.commit("setPptData", [{
    "title": "欢迎使用",
    "description": "",
}]);
const inputsBack = (data) => {
    // console.log("收到子组件的消息", data);
    res.value = data;
}

const chagePttPage = (data) => {
    // console.log("收到子组件的消息", data);
    pdata.value = data;
}



</script>

<style scoped  lang="less">
.home-view {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 80%;
    margin-left: auto;
    margin-right: auto;

    .left {
        width: 24%;
        border-radius: 20px;
        height: 90%;
        box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.2);
    }

    .right {
        width: 72%;
        height: 90%;
        border-radius: 20px;
        border-color: transparent;
        box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.2);
    }
}
</style>
