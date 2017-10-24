import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import { Link } from './Link';
import { Logger } from '../../../util/log';

@Component({
    template: require('./navbar.html')
})
export class NavbarContainer extends Vue {

    protected logger: Logger;

    inverted: boolean = true; // default value

    object: { default: string } = { default: 'Default object property!' }; // objects as default values don't need to be wrapped into functions

    links: Link[] = [
        new Link('App', '/'),
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
