import state from './state.js';
import getters from './getter.js';
import mutations from './mutation.js';
import actions from './action.js';

// 如果使用了 module，请不用在使用
const store = new Vuex.Store({
    state ,
    getters ,
    mutations ,
    actions
});

export default store;