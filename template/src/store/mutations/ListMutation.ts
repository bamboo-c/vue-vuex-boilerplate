import Vue from 'vue';
import {MutationTree} from 'vuex';
import {ListMutationTypes} from '../mutation-types/ListMutationTypes';
import {listState} from '../states/listState';

const listMutations : MutationTree<listState> = {
  [ListMutationTypes.GET_LIST]: (state: listState, {items}) => {
    items.forEach(items => {
      state.listItem.push({
        id: items.id,
        name: items.name,
      }); 
    }) 
  }
};

export default listMutations;
