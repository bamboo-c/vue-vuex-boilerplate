import {ActionTree} from 'vuex';
import {ListMutationTypes} from '../mutation-types/listMutationTypes';
import {listState} from '../states/listState';
import * as listAPI from '../../api/listItems'


const listAction: ActionTree<listState,listState> = {
  [ListMutationTypes.GET_LIST]: ({commit}) => {
    listAPI.getAllList(items => {
      commit(ListMutationTypes.GET_LIST, {
        items
      })
    })
  },
};

export default listAction;
