import Vue from 'vue';
import Vuex from 'vuex';

// actions
import CounterActions from './actions/counter';
import ListActions from './actions/list';

// getters
import CounterGetters from './getters/counter';
import ListGetters from './getters/list';

// mutations
import CounterMutations from './mutations/counter';
import ListMutations from './mutations/list';

// state
import CounterState from './states/counter';
import ListState from './states/list';

Vue.use(Vuex);

const CounterStore = new Vuex.Store({
  CounterState,
  CounterActions,
  CounterMutations,
  CounterGetters,
});

const ListStore = new Vuex.Store({
  CounterState,
  CounterActions,
  CounterMutations,
  CounterGetters,
})

export default CounterStore, ListStore;
