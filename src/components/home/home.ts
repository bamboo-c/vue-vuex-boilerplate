import Vue from 'vue';
import Component from 'vue-class-component';

import './home.css';

@Component({
    template: require('./home.html')
})
export class HomeComponent extends Vue {

    package: string = 'vue-vuex-boilerplate';
    repo: string = 'https://github.com/bamboo-c/vue-vuex-boilerplate';
    mode: string = process.env.ENV;

}
