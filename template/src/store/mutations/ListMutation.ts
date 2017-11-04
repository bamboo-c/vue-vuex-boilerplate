import Vue from 'vue';
import {MutationTree} from 'vuex';
import {MutationTypes} from '../mutation-types/ListMutationTypes';
import {State} from '../states/ListState';

const ListMutations : MutationTree<State> = {
  [MutationTypes.GET_LIST]: (state: State, {items}) => {
    items.forEach(items => {
      state.listItem.push({
        id: items.id,
        name: items.name,
      }); 
    }) 
  }
};

export default ListMutations;
