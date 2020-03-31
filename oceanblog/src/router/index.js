import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import ArticleManager from '../views/admin/ArticleManager.vue'
import ArticleTagManager from '../views/admin/ArticleTagManager.vue'
import ArticleTypeManager from '../views/admin/ArticleTypeManager.vue'
import ArticleAdd from '../components/atricle/Add.vue'
import TagAdd from '../components/tags/Add.vue'
import TypeAdd from '../components/types/Add.vue'

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
  {
    path: '/admin/articleadd',
    component: ArticleAdd
  },
  {
    path: '/admin/tagadd',
    component: TagAdd
  },
  {
    path: '/admin/typeadd',
    component: TypeAdd
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
