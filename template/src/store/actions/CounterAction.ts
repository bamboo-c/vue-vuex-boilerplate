import {ActionTree} from 'vuex';
import {CounterMutationTypes} from '../mutation-types/counterMutationTypes';
import {counterState} from '../states/counterState';
import * as listAPI from '../../api/listItems'


const counterAction: ActionTree<counterState,counterState> = {
  [CounterMutationTypes.INCREMENT_VALUE]: ({commit}) => {
    commit(CounterMutationTypes.INCREMENT_VALUE);
  },
  [CounterMutationTypes.DECREMENT_VALUE]: ({commit}) => {
    commit(CounterMutationTypes.DECREMENT_VALUE);
  },
  [CounterMutationTypes.RESET_VALUE]: ({commit}) => {
    commit(CounterMutationTypes.RESET_VALUE);
  },
};

export default counterAction;
