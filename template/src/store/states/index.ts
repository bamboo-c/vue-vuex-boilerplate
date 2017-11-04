// root state object
// each Vuex instance is just a single state tree.
export interface ListItem {
  id: number;
  name: string;
}

export class State {
  public count: number;
  public listItem: ListItem[];

  constructor() {
    this.count = 0;
    this.listItem = [];
  }
}

const state = new State();
export default state;
