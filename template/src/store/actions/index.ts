import {ActionTree} from 'vuex';
import {MutationTypes} from '../mutation-types/index';
import {State} from '../states/index';
import * as listAPI from '../../api/listItems'


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
  [MutationTypes.GET_LIST]: ({commit}) => {
    listAPI.getAllList(items => {
      commit(MutationTypes.GET_LIST, {
        items
      })
    })
  },
};

export default actions;
