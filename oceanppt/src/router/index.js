/*
 * @Author: OCEAN.GZY
 * @Date: 2023-07-15 15:10:40
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2023-07-19 16:07:49
 * @FilePath: /oceanppt/src/router/index.js
 * @Description: 注释信息
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
