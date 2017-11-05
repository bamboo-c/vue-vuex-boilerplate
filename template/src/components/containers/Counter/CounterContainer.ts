import Vue from 'vue';
import Component from 'vue-class-component';
import {MutationTypes} from '../../../store/mutation-types';

@Component({
  template: require('./counter.html'),
})
export class CounterContainer extends Vue {

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
