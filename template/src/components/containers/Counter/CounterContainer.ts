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
  private back() {
    this.$router.back();
  }
  private countUp() {
    this.$store.dispatch(MutationTypes.COUNT_UP);
  }
  get count() {
    return this.$store.state.count;
  }
}
