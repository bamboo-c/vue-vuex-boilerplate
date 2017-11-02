import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions/index';
import getters from './getters/index';
import mutations from './mutations/index';
import state from './states/index';

Vue.use(Vuex);

const store = new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
});

export default store;
