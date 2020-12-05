import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugin/element'
import './plugin/axios'
import './plugin/cube-ui'
import * as ocSockApi from './plugin/ocsocket'

Vue.config.productionTip = false
Vue.prototype.$ocSockApi = ocSockApi

new Vue({
  router,
  store,
  sockets:{
    connect: function(){
      console.log('socket connected')
    }
  },
  render: h => h(App)
}).$mount('#app')
