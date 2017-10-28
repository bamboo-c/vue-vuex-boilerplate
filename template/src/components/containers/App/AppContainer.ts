import Vue from 'vue';
import Component from 'vue-class-component';


@Component({
  template: require('./index.html')
})
export class AppContainer extends Vue {

  package: string = 'vue-vuex-boillerblate';
  repo: string = 'https://github.com/bamboo-c/vue-vuex-boillerplate';
  mode: string = process.env.ENV;

}
