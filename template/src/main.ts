import Vue from 'vue';
import VueRouter from 'vue-router';

import './styles/main.scss';

// conatiners
import { AppContainer } from './components/containers/App/';
import { ListContainer } from './components/containers/List/';

// modules
import { Navbar } from './components/modules/Navbar/';

// ui
import { Button } from './components/ui/Button/';

// register the plugin
Vue.use(VueRouter);

let router = new VueRouter({
  routes: [
    { path: '/', component: AppContainer },
    { path: '/list', component: ListContainer }
  ]
});

new Vue({
  el: '#app-main',
  router: router,
  components: {
    'navbar': Navbar
  }
});
