import Component from 'vue-class-component';
import Vue  = require('vue');
import {MutationTypes} from '../../vuex/mutation-types/index';
/**
 * Counter Component Vuex used
 */
@Component({
  name: 'counter',
  template: require('./counter.html'),
})
export class Counter extends Vue {
  private incrementValue() {
    this.$store.dispatch(MutationTypes.INCREMENT_VALUE);
  }
  private decrementValue() {
    this.$store.dispatch(MutationTypes.DECREMENT_VALUE);
  }
  private resetValue() {
    this.$store.dispatch(MutationTypes.RESET_VALUE);
  }
  get count() {
    return this.$store.state.count;
  }
}
