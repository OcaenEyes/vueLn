<!--
 * @Author: OCEAN.GZY
 * @Date: 2023-07-14 16:05:21
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2023-07-21 15:44:13
 * @FilePath: /oceanppt/src/views/LeftView.vue
 * @Description: 注释信息
-->
<template>
    <div class="side" @mousemove="mousePos">
        <div class="summary-view" v-show="showSum">
            <div class="nav">
                <div class="title">页面信息</div>
                <div class="close-icon" @click="closeSum">
                    X
                </div>
            </div>
            <div class="summarys" v-for="(i, index) in ppts" v-bind:key="index">
                <li :class="{ 'selected': currentIndex == index }">
                    <PptSummaryCard class="card" @click="clickCard(i, index)" :summary="i"></PptSummaryCard>
                </li>
            </div>
            <button class="new-page" @click="newPage">New Page</button>
        </div>
        <div class="editor-view">
            <div class="editor">

                <textarea class="text-in" v-on:input="insChange" placeholder="输入一些想法～">
                   
                </textarea>
            </div>
        </div>
    </div>
</template>
<script setup>
import PptSummaryCard from '../components/PptSummaryCard'
import { ref, defineEmits } from 'vue'
import store from '../store/index.js'

var currentIndex = ref(0);
var showSum = ref(true);
const mousePos = (e) => {
    console.log(e.clientX, e.clientY);
    if (e.clientX < 90 && e.clientY > 200) {
        console.log("修改了吗")
        showSum.value = true
    }
    console.log("现在的showSum", showSum.value);
};
const closeSum = () => {
    showSum.value = false;
}

const emits = defineEmits(['inputsBack', 'chagePttPage']);

const insChange = (e) => {
    emits("inputsBack", e.target.value);
}

const clickCard = (e, i) => {
    console.log("切换到新的ptt页", e, i);
    emits("chagePttPage", e);
    currentIndex.value = i;
};

var ppts = store.state.ppt.pdatas;
console.log("ppts", ppts);

const newPage = () => {
    store.commit("addPptDatas", {
        "title": "新页面" + Math.floor(Math.random() * 10000),
    })
    // ppts.push({
    //     "title": "新页面"
    // });
};

</script>
<style lang="less" scoped>
textarea::placeholder {
    color: #999;
}

.side {
    // background-color: rgb(68, 26, 203);
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;


    .summary-view {

        height: 100%;
        width: 200px;
        overflow-x: hidden;
        border-radius: 20px;
        box-shadow: 1px 1px 20px 1px rgba(81, 204, 238, 0.65);
        background-color: #f5f5f5;


        .nav {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding-left: 20px;
            padding-right: 20px;
            height: 46px;
            border-bottom: 1px dashed #000000aa;
            font-weight: bold;
            color: #333;

            .close-icon {
                border: none;
                border-radius: 50%;
                width: 24px;
                height: 26px;
                text-align: center;
                background-color: white;
                line-height: 28px;
                font-weight: bolder;
                cursor: pointer;
            }

            .close-icon:hover {
                background-color: rgb(81, 204, 238);
                color: white;
            }
        }

        .summarys {
            overflow-y: auto;

            li {
                list-style: none;
                text-decoration: none;
                // background-color:red;
                margin-top: 20px;
                margin-left: 20px;
                margin-right: 20px;
                border-radius: 10px;

                :hover {
                    cursor: pointer;
                    box-shadow: 1px 1px 10px 1px rgb(81, 203, 238);
                }

                .card {
                    background-color: #333;
                    border-radius: 10px;
                    color: white;
                    height: 100px;
                    font-size: small;
                    font-weight: normal;
                }
            }

            li.selected {
                box-shadow: 1px 1px 10px 1px rgb(81, 204, 238);
                // background-color: black;
            }

        }

        .new-page {
            background-color: #333;
            color: white;
            width: 60%;
            font-size: 12px;
            margin-top: 20px;
            margin-bottom: 20px;
            height: 30px;
            border-radius: 20px;
            border: none;


        }

        .new-page:hover {
            background-color: rgb(81, 204, 238);
        }
    }

    .editor-view {
        height: 100%;
        flex: 1;
        margin-left: 20px;
        border-radius: 20px;
        box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.2);

        // background-color: rgba(0, 255, 255, 0.5);
        .editor {
            height: 100%;
            width: 100%;
            border-radius: 20px;

            .text-in {
                outline: none;
                border: none;
                // background-color: rgba(55, 242, 120, 0.879);
                color: black;
                font-size: 16px;
                padding: 2%;
                width: 100%;
                height: 100%;
                font-family: monospace;
                border-radius: 20px;
                border-color: transparent;
                resize: none;
            }

            .text-in::-webkit-scrollbar {
                /*滚动条整体样式*/
                width: 5px;
                /*高宽分别对应横竖滚动条的尺寸*/
                height: 1px;
            }

            .text-in::-webkit-scrollbar-thumb {
                /*滚动条里面小方块*/
                border-radius: 10px;
                background-color: rgba(3, 3, 3, 0.631);
                background-image: -webkit-linear-gradient(45deg,
                        rgba(255, 255, 255, 0.2) 25%,
                        transparent 25%,
                        transparent 50%,
                        rgba(255, 255, 255, 0.2) 50%,
                        rgba(255, 255, 255, 0.2) 75%,
                        transparent 75%,
                        transparent);
            }

            .text-in::-webkit-scrollbar-track {
                /*滚动条里面轨道*/
                box-shadow: inset 0 0 3px rgba(127, 127, 127, 0.2);
                border-radius: 10px;
                background: #ededed;
            }

        }



    }

    .editor-view :hover {

        box-shadow: 1px 1px 20px 1px rgba(81, 204, 238, 0.65);
    }

}
</style>