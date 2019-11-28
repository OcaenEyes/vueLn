import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index.vue'
import Test from '../components/Test.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: Index,
      meta:{
        title:'高智勇的个人简历',
      }
    },
    {
      path:'/test',
      component: Test,
      meta:{
        title:'测试页面',
      }
    }
  ]
})
