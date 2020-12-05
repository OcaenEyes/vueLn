import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Im from '../components/Im.vue';
import ImChat from '../components/ImChat.vue'
import LoginRegister from '../views/RegisterLogin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/im',
    name: 'Im',
    component: Im
  },
  {
    path: '/imchat',
    name: 'ImChat',
    component: ImChat
  },
  {
    path: '/loginregister',
    name: 'LoginRegister',
    component: LoginRegister
  }
]

const router = new VueRouter({
  routes
})

export default router
