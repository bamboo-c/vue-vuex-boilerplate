import {MutationTree} from 'vuex';
import {MutationTypes} from '../mutation-types/index';
import {State} from '../states/index';
import axios, {AxiosResponse} from 'axios';

interface UserResponse {
  id: string;
  name: string;
}
const mutations : MutationTree<State> = {
  // counter
  [MutationTypes.INCREMENT_VALUE]: (state: State) => {
    state.count += 1;
  },
  [MutationTypes.DECREMENT_VALUE]: (state: State) => {
    state.count -= 1;
  },
  [MutationTypes.RESET_VALUE]: (state: State) => {
    state.count = 0;
  },

  items: UserResponse[] = [];
  private url = 'https://jsonplaceholder.typicode.com/users';
  protected axios;

  constructor() {
    super();
    this.axios = axios;
  }
  // list
  [MutationTypes.LOAD_LIST]: (state: State) => {
  
  }
};

export default mutations;
