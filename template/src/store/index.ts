import Vue from 'vue';
import Vuex from 'vuex';

// actions
import counterAction from './actions/counterAction';
import listAction from './actions/listAction';

// getters
import counterGetter from './getters/counterGetter';
import listGetter from './getters/listGetter';

// mutations
import counterMutation from './mutations/counterMutation';
import listMutation from './mutations/listMutation';

// state
import counterState from './states/counterState';
import listState from './states/listState';

Vue.use(Vuex);

const counter = {
  state: counterState,
  mutations: counterMutation,
  actions: counterAction,
  getter: counterGetter,
}

const list = {
  state: listState,
  mutations: listMutation,
  actions: listAction,
  getter: listGetter,
}

const store = new Vuex.Store({
  modules: {
    counter: counter,
    list: list,
  }
});

export default store;
