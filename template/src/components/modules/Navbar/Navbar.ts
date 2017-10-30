import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import { Link } from './Link';
import { Logger } from '../../../utils/log';

@Component({
  template: require('./navbar.html')
})
export class Navbar extends Vue {

  protected logger: Logger;

  inverted: boolean = true; // default value

  object: { default: string } = { default: 'Default object property!' }; // objects as default values don't need to be wrapped into functions

  links: Link[] = [
    new Link('Home', '/'),
    new Link('Counter', '/counter'),
    new Link('List', '/list')
  ];

  @Watch('$route.path')
  pathChanged() {
    this.logger.info('Changed current path to: ' + this.$route.path);
  }

  mounted() {
    if (!this.logger) this.logger = new Logger();
    this.$nextTick(() => this.logger.info(this.object.default));
  }
}
