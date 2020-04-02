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
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
