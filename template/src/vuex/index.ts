import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions/index';
import getters from './getter/index';
import mutations from './mutations/index';
import states from './states/index';

Vue.use(Vuex);

// A Vuex instance is created by combining the state, the actions,
// and the mutations. Because the actions and mutations are just
// functions that do not depend on the instance itself, they can
// be easily tested or even hot-reloaded (see counter-hot example).

const prod = (process.env.NODE_ENV === 'production');

const store = new Vuex.Store({
    states,
    actions,
    mutations,
    getters,
});

export default store;
