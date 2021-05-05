import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugin/element'
import './plugin/axios'
import './plugin/cube-ui'
import * as ocSockApi from './plugin/ocsocket'
import qs from 'qs'

Vue.config.productionTip = false
Vue.prototype.$ocSockApi = ocSockApi
Vue.prototype.$qs = qs

Vue.prototype.resetSetItem = function (key, newVal) {
  if (key === 'chatInfos') {

    // 创建一个StorageEvent事件
    var newStorageEvent = document.createEvent('StorageEvent');
    const storage = {
      setItem: function (k, val) {
        sessionStorage.setItem(k, val);

        // 初始化创建的事件
        newStorageEvent.initStorageEvent('setItem', false, false, k, null, val, null, null);

        // 派发对象
        window.dispatchEvent(newStorageEvent)
      }
    }
    return storage.setItem(key, newVal);
  }
}


new Vue({
  router,
  store,
  sockets: {
    connect: function () {
      console.log('socket connected')
    }
  },
  render: h => h(App)
}).$mount('#app')
