<!--
 * @Author: OCEAN.GZY
 * @Date: 2023-07-14 23:55:32
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2023-07-15 15:38:00
 * @FilePath: /oceanppt/src/components/PptSummaryCard.vue
 * @Description: 注释信息
-->

<template>
    <div>
        <h5>{{ summary.title }}</h5>
        <h6>{{ summary.text }}</h6>
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