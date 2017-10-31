import {MutationTree} from 'vuex';
import {MutationTypes} from '../mutation-types/index';
import {State} from '../states/index';

interface UserResponse {
  id: string;
  name: string;
}
const mutations : MutationTree<State> = {
  [MutationTypes.INCREMENT_VALUE]: (state: State) => {
    state.count += 1;
  },
  [MutationTypes.DECREMENT_VALUE]: (state: State) => {
    state.count -= 1;
  },
  [MutationTypes.RESET_VALUE]: (state: State) => {
    state.count = 0;
  },

  // list
  [MutationTypes.LOAD_LIST]: (state: State) => {
  
  }
};

export default mutations;
