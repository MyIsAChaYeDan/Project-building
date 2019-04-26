import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
// vuex状态引入主入口
import common from './common';
const store = new Vuex.Store({
    modules:{
        common: common,
    }
})
export default store;