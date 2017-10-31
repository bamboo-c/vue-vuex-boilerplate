import {ActionTree} from 'vuex';
import {MutationTypes} from '../mutation-types/index';
import {State} from '../states/index';


const actions: ActionTree<State,State> = {
  // counter
  [MutationTypes.INCREMENT_VALUE]: ({commit}) => {
    commit(MutationTypes.INCREMENT_VALUE);
  },
  [MutationTypes.DECREMENT_VALUE]: ({commit}) => {
    commit(MutationTypes.DECREMENT_VALUE);
  },
  [MutationTypes.RESET_VALUE]: ({commit}) => {
    commit(MutationTypes.RESET_VALUE);
  },

  // list
  [MutationTypes.LODING_LIST]: ({commit}) => {
    commit(MutationTypes.LODING_LIST);
  },
};

export default actions;
