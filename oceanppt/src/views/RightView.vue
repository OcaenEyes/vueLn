<!--
 * @Author: OCEAN.GZY
 * @Date: 2023-07-14 16:05:30
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2023-07-15 14:51:45
 * @FilePath: /oceanppt/src/views/RightView.vue
 * @Description: 注释信息
-->
<template>
    <div class="detail">
        <div class="content" v-html="result"> </div>
        <!-- <div class="content-source"> {{ result }} </div> -->
    </div>
</template>

<!-- /*
 **** 使用setup()模式  *** 
*/ -->
<!-- <script >
import MarkdownIt from "markdown-it"

import { reactive, onMounted } from 'vue'
export default {
    name: "RightView",
    setup() {
        const state = reactive({
            markdown: '# Hello, World!',
            html: ''
        })

        onMounted(() => {
            const md = new MarkdownIt()
            state.html = md.render(state.markdown)
        })
    }
}
</script> -->


<!-- 使用旧的 data return 模式 -->
<!-- <script>
export default {
    data(){
        return{
            res:"欢迎使用"
        }
    },
    created(){
        console.log("kaishi created");
        var md = require('markdown-it')();
        this.res = md.render("# ahashaja");
    },
}
</script> -->


<!-- 使用心得 script setup -->
<script setup>
import { ref, defineProps, watch } from 'vue'
const props = defineProps({
    res: {
        type: String
    },
});

console.log("收到父组件的参数", props.res);
console.log(props.res);
var result = ref("");
const md = require('markdown-it')({
    html: true,
    linkify: true,
    typographer: true
});
result = ref(md.render(props.res));
console.log("旧的", result);
watch(props, (newProps) => {
    if(newProps.res!=""){
        result = ref(md.render(newProps.res));
    }else{
        result = ref(md.render('## ❤️OCEAN-PPT❤️ \n SHOW出你的IDEA~'));
    }
    
    console.log("新的", result);
});
</script>

<style lang="less" scoped>
.detail {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;

    .content {
        height:96%;
        width: 98%;
        // background-color:#020304;
        
    }

    .content-source {
        // height: 100%;
        width: 90%;
        background-color:#020304;
    }
}
</style>