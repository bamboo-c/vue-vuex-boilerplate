import axios, {AxiosResponse} from 'axios';

interface UserResponse {
  id: string;
  name: string;
}

items: UserResponse[] = [];
  private url = 'https://jsonplaceholder.typicode.com/users';
  protected axios;

  constructor() {
    super();
    this.axios = axios;
  }

private loadItems() {
   if (!this.items.length) {
     this.axios.get(this.url).then((response: AxiosResponse) => {
       this.items = response.data;
     }, (error) => {
       console.error(error);
     });
   }
}
const _listItems = [
]

export default {
  getListItems(cb) {
    () => cb(_listItems);
  },
}
