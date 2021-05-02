var ws = null;
var global_callback = null;
var websock_port = '8082';
var host_name = 'ws://127.0.0.1'

function initWebsocket() {
    var wsuri = host_name + ":" + websock_port + "/ws";

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
    console.log("收到服务器消息" + e.data);
    var chatinfos;
    var newchatinfos = [];
    var msgstr;
    var msg = {};
    msgstr = e.data;
    msgstr = msgstr.replace(/, /g, '","');
    msgstr = msgstr.replace(/=/g, '":"');
    msgstr = msgstr.replace(/{/g, '{"');
    msgstr = msgstr.replace(/}/g, '"}')
    msg = JSON.parse(msgstr);
    chatinfos = JSON.parse(sessionStorage.getItem("chatInfos"));
    chatinfos.forEach(chatinfo => {
        if (chatinfo.chatUserId == msg.senderId) {
            chatinfo.chatUserMsgs.push(msg);
            newchatinfos.push(chatinfo);
        } else if (chatinfo.chatGroupId == msg.groupCid && chatinfo.group == true) {
            chatinfo.chatGroupMsgs.push(msg);
            newchatinfos.push(chatinfo);
        } else if (msg.group == true) {
            var chatGroupMsgs = [];
            chatGroupMsgs.push(msg);
            var newGroupMsg = {};
            newGroupMsg = {
                chatGroupMsgs: chatGroupMsgs,
                chatGroupName: msg.groupName,
                chatGroupHeadImg: "",
                group: true,
                chatGroupId: msg.groupCid,
            }
            newchatinfos.push(newGroupMsg);
        } else if (msg.group == false) {
            var chatUserMsgs = [];
            chatUserMsgs.push(msg);
            var newUserMsg = {};
            newUserMsg = {
                chatUserMsgs: chatUserMsgs,
                chatUserName: msg.senderNickName,
                chatUserHeadImg: "",
                group: false,
                chatUserId: msg.senderId,
            }
            newchatinfos.push(newUserMsg);
        }
    });
    sessionStorage.setItem("chatInfos", JSON.stringify(newchatinfos));
    console.log(JSON.parse(sessionStorage.getItem("chatInfos")));
}

// 数据发送
function websock_send(e) {
    ws.send(JSON.stringify(e));
    // console.log(e);
    global_callback(e);

}


// 实际业务调用
function sendSocket(data, callback) {
    global_callback = callback;
    if (ws.readyState === ws.OPEN) {
        // 如果是开启状态
        websock_send(data);
    } else if (ws.readyState === ws.CONNECTING) {
        setTimeout(() => {
            sendSocket(data, callback)
        }, 1000);
    } else if (ws.readyState === ws.CLOSED) {
        initWebsocket();
        var connectMsg = {};
        connectMsg = {
            action: "0",
            message: {
                senderId: JSON.parse(sessionStorage.getItem("myUserInfo")).userId,
            },
            extend: "",
        };
        sendSocket(connectMsg);
        setTimeout(() => {
            sendSocket(data, callback)
        }, 1000);
    }
}

initWebsocket();

export { sendSocket }