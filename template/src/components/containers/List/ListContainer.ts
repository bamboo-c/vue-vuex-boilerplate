import Vue from 'vue';
import Component from 'vue-class-component';
import {MutationTypes} from '../../../vuex/mutation-types/index';

@Component({
  template: require('./list.html')
})
export class ListContainer extends Vue {
   
  mounted() {
    this.$store.dispatch(MutationTypes.LOAD_LIST);
  }

  get listItem() {
    return this.$store.state.listItem;
  }
}
