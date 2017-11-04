export interface ListItem {
  id: number;
  name: string;
}

export class ListState {
  public listItem: ListItem[];

  constructor() {
    this.listItem = [];
  }
}

const listState = new ListState();
export default listState;
