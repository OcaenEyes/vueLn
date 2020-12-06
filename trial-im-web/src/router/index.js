import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Im from '../components/Im.vue';
import LoginRegister from '../views/RegisterLogin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/demo',
    name: 'Demo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "demo" */ '../views/Demo.vue')
  },
  {
    path: '/im',
    name: 'Im',
    component: Im
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
