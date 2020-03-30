import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import ArticleManager from '../views/admin/ArticleManager.vue'
import ArticleTagManager from '../views/admin/ArticleTagManager.vue'
import ArticleTypeManager from '../views/admin/ArticleTypeManager.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: ArticleManager
  },
  {
    path: '/admin/articlemanager',
    component: ArticleManager
  },
  {
    path: '/admin/articletagmanager',
    component: ArticleTagManager
  },
  {
    path: '/admin/articletypemanager',
    component: ArticleTypeManager
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
