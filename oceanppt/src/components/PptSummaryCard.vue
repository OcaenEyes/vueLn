<!--
 * @Author: OCEAN.GZY
 * @Date: 2023-07-14 23:55:32
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2023-07-19 20:07:37
 * @FilePath: /oceanppt/src/components/PptSummaryCard.vue
 * @Description: 注释信息
-->

<template>
    <div>
        <text>{{ summary.title }}</text>
        <text>{{ summary.text }}</text>
    </div>
</template>

<script setup >
import { toRef, defineProps } from 'vue'
const props = defineProps({
    summary: {
        type: Object,
        required: true
    }
});
var summary = toRef(props.summary);
console.log("summary", summary.value);
</script>

<style lang="less" scoped></style>