import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import qs from 'qs'

Vue.config.productionTip = false
Vue.prototype.$qs = qs

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
