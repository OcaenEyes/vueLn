const state = {
    pdatas: []
};

// 查询获取
const getters = {
    getPptData: state => state.pdatas,
    getPptCount: state => Object.keys(state.pdatas).length
};

// 异步请求处理
const actions = {};

// 操作state
const mutations = {
    setPptData(state, data) {
        state.pdatas = data;
    },
    addPptDatas(state, data) {
        state.pdatas.push(data);
    },
    cleanPptData(state) {
        state.pdatas = [];
    }
};

export default {
    namespace: 'ppt',
    state,
    getters,
    actions,
    mutations
};