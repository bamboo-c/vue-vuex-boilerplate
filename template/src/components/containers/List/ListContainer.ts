import Vue from 'vue';
import Component from 'vue-class-component';
import {MutationTypes} from '../../../store/mutation-types';
import {State} from '../../../store/state'

@Component({
  template: require('./list.html')
})
export class ListContainer extends Vue {
  listItems: State.listItem = [];

  mounted() {
    this.$store.dispatch(MutationTypes.GET_LIST);
  }

  get listItem() {
    this.listItems = this.$store.state.listItem;
    return this.listItems;
  }
}
