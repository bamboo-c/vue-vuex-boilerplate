// root state object
// each Vuex instance is just a single state tree.

export class State {

  public count: number;
  public listItem: [{
    id: number;
    name: string;
  }];

  // state initializer
  constructor() {
    this.count = 0;
    this.listItem = [{
      id: 0,
      name: 'list item',
    }];
  }
}

const state = new State();
export default state;
