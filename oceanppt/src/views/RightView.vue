<!--
 * @Author: OCEAN.GZY
 * @Date: 2023-07-14 16:05:30
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2023-07-19 20:08:24
 * @FilePath: /oceanppt/src/views/RightView.vue
 * @Description: 注释信息
-->
<template>
    <div class="detail">
        <!-- <div class="content" v-html="result"> </div> -->
        <div class="content">
            <article id="webslides">
                <section id="section-2" class="slide">
                    <div class="wrap size-50 aligncenter">
                        <h2><strong>Why WebSlides?</strong></h2>
                        <p class="text-intro">Good karma &amp; Productivity.</p>
                        <div class="bg-white shadow">
                            <ul class="flexblock reasons">
                                <li>
                                    <h2>An opportunity to engage.</h2>
                                    <p>WebSlides is about good karma. This is about telling the story, and sharing it in a
                                        beautiful way. HTML and CSS as narrative elements.</p>
                                </li>
                                <li>
                                    <h2>Work better, faster.</h2>
                                    <p>Designers, marketers, and journalists can now focus on the content. Simply <a
                                            href="/demos" title="WebSlides Demos">choose a demo</a> and customize it in
                                        minutes.</p>
                                </li>
                            </ul>
                        </div>
                        <!-- .end .bg-white shadow -->
                    </div>
                    <!-- .end .wrap -->
                </section>
            </article>
        </div>

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
import { ref, defineProps, watch, onMounted } from 'vue'
import webslides from "webslides/src/js/full"

onMounted(() => {
    window.ws = webslides
})

const props = defineProps({
    res: {
        type: String
    },
    pdata: {
        type: Object
    }
});

// console.log("收到父组件的参数", props.res, props.pdata);
var result = ref("");
// var pptdata = ref({});
const md = require('markdown-it')({
    html: true,
    linkify: true,
    typographer: true
});
result = ref(md.render(props.res));
// console.log("旧的", result.value);
watch(props, (newProps) => {
    if (newProps.res != "") {
        result = ref(md.render(newProps.res));
    } else {
        result = ref(md.render('## ❤️OCEAN-PPT❤️ \n SHOW出你的IDEA~'));
    }

    // if (newProps.pdata != undefined) {
    //     pptdata = newProps.pdata;
    // } else {
    //     pptdata = {};
    // }

    console.log("新的", result.value);
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
        height: 96%;
        width: 98%;
        overflow-y: auto;

        #webslides {
            height: 100% !important;


            .slide {
                padding: 4rem;
                height: 100% !important;
                min-height: 100%;
            }
        }
    }

    .content-source {
        // height: 100%;
        width: 90%;
    }
}
</style>