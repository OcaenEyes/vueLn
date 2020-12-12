import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import qs from 'qs'
import CKEditor from '@ckeditor/ckeditor5-build-decoupled-document'
import '@ckeditor/ckeditor5-build-decoupled-document/build/translations/zh-cn'

Vue.config.productionTip = false
Vue.prototype.$qs = qs
Vue.prototype.$CKEditor = CKEditor
Vue.config.devtools = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  // 页面title
  if (to.meta.title) {
    document.title = to.meta.title
  }
  // 判断该路由是否需要登录
  if (to.matched.some(record => record.meta.requireAuth)) {

    if (localStorage.token) {
      next();
    } else {
      console.log("需要登录");
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    }
  } else {
    next();
  }
})
