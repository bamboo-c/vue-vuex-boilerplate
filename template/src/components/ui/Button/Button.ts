import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import { Logger } from '../../../utils/log';

@Component({
  template: require('./button.html')
})
export class Button extends Vue {

  protected logger: Logger;

  mounted() {
    if (!this.logger) this.logger = new Logger();
  }
}
