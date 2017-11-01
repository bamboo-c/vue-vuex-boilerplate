// root state object
// each Vuex instance is just a single state tree.

export class State {

  public count: number;
  public listItem: string[] 

  // state initializer
  constructor() {
    this.count = 0;
    this.listItem = [''];
  }
}

const state = new State();
export default state;
