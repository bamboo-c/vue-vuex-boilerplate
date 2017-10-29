import {ActionTree} from 'vuex';
import {MutationTypes} from './mutation-types';
import {State} from './state';


const actions: ActionTree<State,State> = {
  [MutationTypes.INCREMENT_VALUE]: ({commit}) => {
    commit(MutationTypes.INCREMENT_VALUE);
  },
};

export default actions;
