import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import ArticleManager from '../views/admin/ArticleManager.vue'
import ArticleTagManager from '../views/admin/ArticleTagManager.vue'
import ArticleTypeManager from '../views/admin/ArticleTypeManager.vue'
import ArticleAdd from '../components/atricle/Add.vue'
import TagAdd from '../components/tags/Add.vue'
import TypeAdd from '../components/types/Add.vue'
import ArticleDetial from '../components/atricle/Detial.vue'
import ArticleModify from '../components/atricle/Modify.vue'
import Login from '../views/login/Login.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   component: ArticleManager,
  //   meta:{
  //     title:'文章管理',
  //     requireAuth:true
  //   }
  // },
  {
    path: '/',
    component: Login,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/admin/articlemanager',
    component: ArticleManager,
    meta: {
      title:'文章管理',
      requireAuth:true
    }
  },
  {
    path: '/admin/articletagmanager',
    component: ArticleTagManager,
    meta: {
      title:'标签管理',
      requireAuth:true
    }
  },
  {
    path: '/admin/articletypemanager',
    component: ArticleTypeManager,
    meta: {
      title:'标签管理',
      requireAuth:true
    }
  },
  {
    path: '/admin/articleadd',
    component: ArticleAdd,
    meta: {
      title:'新增文章',
      requireAuth:true
    }
  },
  {
    path: '/admin/articledetial',
    component: ArticleDetial,
    meta: {
      title:'文章详情',
      requireAuth:true
    }
  },
  {
    path: '/admin/articlemodify',
    component: ArticleModify,
    meta: {
      title:'修改文章',
      requireAuth:true
    }
  },
  {
    path: '/admin/tagadd',
    component: TagAdd,
    meta: {
      title:'新增标签',
      requireAuth:true
    }
  },
  {
    path: '/admin/typeadd',
    component: TypeAdd,
    meta: {
      title:'新增类型',
      requireAuth:true
    }
  },
  {
    path: '/login',
    component: Login
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
