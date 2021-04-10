var ws = null;
var global_callback = null;
var websock_port = '8082';
var host_name = 'ws://127.0.0.1'

function initWebsocket() {
    var wsuri = host_name + ":" + websock_port+"/ws";

    if (window.WebSocket) {
        ws = new WebSocket(wsuri);
        //监听连接成功
        ws.onopen = function () {
            websock_open();
        };
        //监听连接失败
        ws.onclose = function (e) {
            websock_close(e);
        };
        //监听报错
        ws.onerror = function () {
            console.log("连接出错");
        };
        // 接收服务器的消息
        ws.onmessage = function (e) {
            websock_onmessage(e);
        };
    }
}

// 连接
function websock_open() {
    console.log("连接成功");
}
// 关闭
function websock_close(e) {
    console.log("connection closed (" + e.code + ")");
}
// 数据接收
function websock_onmessage(e) {
    console.log("收到服务器消息"+ e);
    global_callback(JSON.parse(e.data));
}

// 数据发送
function websock_send(e) {
    ws.send(JSON.stringify(e));
    // ws.send(e);
    console.log(e);
    global_callback(e);

}


// 实际业务调用
function sendSocket(data,callback){
    global_callback = callback;
    if(ws.readyState === ws.OPEN){
        // 如果是开启状态
        websock_send(data);
    }else if (ws.readyState === ws.CONNECTING){
        setTimeout(() => {
            sendSocket(data,callback)
        }, 1000);
    }else if(ws.readyState === ws.CLOSED){
        initWebsocket();
        sendSocket(data,callback);
        setTimeout(() => {
            sendSocket(data,callback)
        }, 1000);
    }
}

initWebsocket();

export {sendSocket}