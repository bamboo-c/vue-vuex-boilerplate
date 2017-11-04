import Vue from 'vue';
import {MutationTree} from 'vuex';
import {MutationTypes} from '../mutation-types/CounterMutationTypes';
import {State} from '../states/CounterState';

const CounterMutation : MutationTree<State> = {
  [MutationTypes.INCREMENT_VALUE]: (state: State) => {
    state.count += 1;
  },
  [MutationTypes.DECREMENT_VALUE]: (state: State) => {
    state.count -= 1;
  },
  [MutationTypes.RESET_VALUE]: (state: State) => {
    state.count = 0;
  },
};

export default CounterMutation;
