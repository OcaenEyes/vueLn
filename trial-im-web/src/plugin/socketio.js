import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'

Vue.use(new VueSocketIO({
    debug:true,
    connection: SocketIO('ws://127.0.0.1:8082',{
        path:'/ws',
        // transports: ['websocket', 'xhr-polling', 'jsonp-polling'],
    })
}))