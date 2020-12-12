import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LoginRegister from '../views/RegisterLogin.vue'
import MsgView from '../views/MsgView.vue'
import FriendWindow from '../views/FriendView.vue'
import CollectWindow from '../views/CollectionView.vue'
import FileWindow from '../views/FileView.vue'
import MsgItemWindow from '../components/msg/MsgItemWindow.vue'
import FriendItemWindow from '../components/friend/FriendItemWindow.vue'

Vue.use(VueRouter)

// const s= 1;
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/msgView',
    children: [
      {
        path: '/msgView',
        name: 'MsgView',
        component: MsgView,
        redirect: '/msgView/msgItem/0',
        children: [
          {
            path: '/msgView/msgItem/:id',
            name: 'MsgItemView',
            component: MsgItemWindow
          }
        ]

      },
      {
        path: '/friend',
        name: 'friend',
        component: FriendWindow,
        children:[
          {
            path: '/friend/firendItem/:id',
            name : 'FriendItemView',
            component: FriendItemWindow
          }
        ]
      },
      {
        path: '/collect',
        component: CollectWindow
      },
      {
        path: '/file',
        component: FileWindow
      }
    ],
  },
  // {
  //   path: '/demo',
  //   name: 'Demo',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "demo" */ '../views/Demo.vue')
  // },
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
