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

var id = "";
var chatInfos = JSON.parse(sessionStorage.getItem("chatInfos"));
if (chatInfos != null) {
  if (chatInfos.length > 0) {
    if (chatInfos[chatInfos.length - 1].group) {
      id = chatInfos[chatInfos.length - 1].chatGroupId;
    } else {
      id = chatInfos[chatInfos.length - 1].chatUserId;
    }
  }
  else {
    // console.log("chatInfos", chatInfos);
  }
} else {
  // console.log("chatInfos", chatInfos);
}
const routes = [
  {
    path: '/',
    redirect: '/loginregister',
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
    component: LoginRegister,
    meta: { requiresAuth: false }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: '/msgView',
    meta: { requiresAuth: true },
    children: [
      {
        path: '/msgView',
        name: 'MsgView',
        component: MsgView,
        redirect: '/msgView/msgItem/' + id,
        meta: { requiresAuth: true },
        children: [
          {
            path: '/msgView/msgItem/:id',
            name: 'MsgItemView',
            component: MsgItemWindow,
            meta: { requiresAuth: true }
          }
        ]
      },
      {
        path: '/friend',
        name: 'FriendView',
        component: FriendWindow,
        meta: { requiresAuth: true },
        children: [
          {
            path: '/friend/firendItem/:id',
            name: 'FriendItemView',
            component: FriendItemWindow,
            meta: { requiresAuth: true }
          }
        ]
      },
      {
        path: '/collect',
        name: 'CollectionView',
        component: CollectWindow,
        meta: { requiresAuth: true }

      },
      {
        path: '/file',
        name: 'FileView',
        component: FileWindow,
        meta: { requiresAuth: true }
      }
    ],
  }

]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  var myCookie;
  myCookie = sessionStorage.getItem("myCookie");
  // console.log(myCookie);
  // console.log(to.meta.requiresAuth);
  if (to.name == 'LoginRegister') {
    if (myCookie != null) {
      // console.log(to.path);
      next({ name: 'Home' })
    } else {
      // console.log(to.path);
      next();
    }
  } else if (to.meta.requiresAuth == true) {
    if (myCookie != null) {
      // console.log(to.path);
      next()
    } else {
      // console.log(to.path);
      next({ name: 'LoginRegister' })
    }
  }

})
export default router
