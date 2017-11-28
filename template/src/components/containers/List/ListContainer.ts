import Vue from 'vue';
import Component from 'vue-class-component';
import {MutationTypes} from '../../../store/mutation-types';
import {State} from '../../../store/state';

@Component({
  template: require('./list.html')
})
export class ListContainer extends Vue {
  mounted() {
    this.$store.dispatch(MutationTypes.GET_LIST);
  }

  get listItem() {
    return this.$store.state.listItem;
  }
}
