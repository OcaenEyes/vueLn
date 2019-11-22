import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index.vue'
import Test from '../components/Test.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/test',
      component: Test,
      mata: {
        title:'测试',

      },
    },
    {
      path: '/index',
      component: Index,
      meta:{
        title:'首页'
      }
    }
  ]
})
