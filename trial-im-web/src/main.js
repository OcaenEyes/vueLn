import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugin/element'
import './plugin/axios'
import './plugin/cube-ui'
import './plugin/socketio'

Vue.config.productionTip = false

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
