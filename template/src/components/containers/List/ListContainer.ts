import Vue from 'vue';
import Component from 'vue-class-component';
import {MutationTypes} from '../../../vuex/mutation-types/index';

@Component({
  template: require('./list.html')
})
export class ListContainer extends Vue {


  mounted() {
    this.$nextTick(() => {
      this.loadItems();
    });
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
}
