import {ActionTree} from 'vuex';
import {ListMutationTypes} from '../mutation-types/ListMutationTypes';
import {ListState} from '../states/ListState';
import * as listAPI from '../../api/listItems'


const ListAction: ActionTree<State,State> = {

  [MutationTypes.GET_LIST]: ({commit}) => {
    listAPI.getAllList(items => {
      commit(MutationTypes.GET_LIST, {
        items
      })
    })
  },
};

export default ListAction;
