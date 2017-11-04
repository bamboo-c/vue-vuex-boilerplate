import {ActionTree} from 'vuex';
import {CounterMutationTypes} from '../mutation-types/CounterMutationTypes';
import {CounterState} from '../states/CounterState';
import * as listAPI from '../../api/listItems'


const CounterAction: ActionTree<State,State> = {
  [MutationTypes.INCREMENT_VALUE]: ({commit}) => {
    commit(MutationTypes.INCREMENT_VALUE);
  },
  [MutationTypes.DECREMENT_VALUE]: ({commit}) => {
    commit(MutationTypes.DECREMENT_VALUE);
  },
  [MutationTypes.RESET_VALUE]: ({commit}) => {
    commit(MutationTypes.RESET_VALUE);
  },
};

export default CounterAction;
