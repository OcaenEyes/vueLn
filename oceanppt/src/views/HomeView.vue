<!--
 * @Author: OCEAN.GZY
 * @Date: 2023-07-14 16:16:31
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2023-07-21 19:40:19
 * @FilePath: /oceanppt/src/views/HomeView.vue
 * @Description: 注释信息
-->
<template>
    <div class="home-view">
        <div class="head">
            <h5>❤️OCEANPPT❤️～</h5>
            <h6><a href="https://github.com/ocaeneyes">GitHub</a></h6>
        </div>
        <div class="main">
            <LeftView class="left" @inputs-back="inputsBack" @chagePttPage="chagePttPage"></LeftView>
            <div style="color:rgb(81, 203, 238);">
                <h6>==>></h6>
            </div>
            <RightView class="right" :res="res" :pdata="pdata"></RightView>
        </div>
        <div class="foot">
            <h6><a href="https://github.com/ocaeneyes">OCEAN.GZY©️2023</a></h6>
        </div>
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
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;

    .head {
        height: 5%;
        width: 100%;
        color: white;
        background-color: #333;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-left: 20px;
        padding-right: 20px;

        a {
            color: white;
        }
    }

    .main {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        height: 90%;
        width: 100%;
        padding-left: 40px;
        padding-right: 40px;

        .left {
            width: 40%;
            // flex: 1;
            max-width: 800px;
            min-width: 500px;
            border-radius: 20px;
            height: 90%;
            margin-left: 20px;
            margin-right: 20px;
            // box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.2);
        }

        .right {
            flex: 1;
            margin-left: 20px;
            margin-right: 20px;
            height: 90%;
            border-radius: 20px;
            border-color: transparent;
            box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.2);


        }

        .right:hover {
            box-shadow: 1px 1px 20px 1px rgba(81, 204, 238, 0.65);
        }

    }

    .foot {
        width: 100%;
        height: 5%;
        color: white;
        background-color: #333;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        a {
            color: white;
        }
    }

}
</style>
