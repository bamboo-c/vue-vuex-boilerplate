import Vue from 'vue';
import {MutationTree} from 'vuex';
import {CounterMutationTypes} from '../mutation-types/CounterMutationTypes';
import {counterState} from '../states/counterState';

const counterMutation : MutationTree<counterState> = {
  [CounterMutationTypes.INCREMENT_VALUE]: (state: counterState) => {
    state.count += 1;
  },
  [CounterMutationTypes.DECREMENT_VALUE]: (state: counterState) => {
    state.count -= 1;
  },
  [CounterMutationTypes.RESET_VALUE]: (state: counterState) => {
    state.count = 0;
  },
};

export default counterMutation;
