import Vue from 'vue'
import VueSocketIO from 'socket.io'
import SocketIO from 'socket.io-client'

Vue.use(VueSocketIO({
    debug:true,
    connection : SocketIO('127.0.0.1:8082',{
        path: '',
        // transports: ['websocket', 'xhr-polling', 'jsonp-polling'],
    })
}));