/*
 * @Author: OCEAN.GZY
 * @Date: 2023-07-14 15:38:16
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2023-07-14 16:27:19
 * @FilePath: /oceanppt/src/main.js
 * @Description: 注释信息
 */
import { createApp } from 'vue'
import App from './App.vue'
import "./assets/static/css/view.css"
import store from './store'
import router from './router'

createApp(App).use(router).use(store).mount('#app')
