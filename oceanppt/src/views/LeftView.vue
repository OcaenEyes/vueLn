<!--
 * @Author: OCEAN.GZY
 * @Date: 2023-07-14 16:05:21
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2023-07-15 14:59:46
 * @FilePath: /oceanppt/src/views/LeftView.vue
 * @Description: 注释信息
-->
<template>
    <div class="summary-view">
        <div v-for="(i, index) in [1, 2, 3, 4, 5]" v-bind:key="index">
            <PptSummaryCard class="card" @click="clickCard(i)"></PptSummaryCard>
        </div>
        <button class="new-page">+</button>
        <div> <textarea class="text-in" v-on:input="insChange" placeholder="输入一些想法～"></textarea>
        </div>
    </div>
</template>
<script setup>
import PptSummaryCard from '../components/PptSummaryCard'
import { defineEmits } from 'vue'
const emits = defineEmits(['inputsBack']);

const insChange = (e) => {
    emits("inputsBack", e.target.value);
}
const clickCard = (e)=>{
    console.log(e);
};

</script>
<style lang="less" scoped>
textarea::placeholder {
    color: #999;
}

.summary-view {
    .card {
        background-color: #f5f5f51e;
        border-radius: 10px;
        height: 140px;
    }
    .new-page{
        width: 100%;
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 20px;
        font-weight: bolder;
        height: 40px;
        border-radius:20px;
        border:none;
    }
}

.text-in {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    border-color: transparent;
    color: #f5f5f5;
}
</style>