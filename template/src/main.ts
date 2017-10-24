import Vue from 'vue';
import VueRouter from 'vue-router';

import './styles/main.scss';

import { AppContainer } from './components/containers/App/';
import { ListContainer } from './components/containers/List/';

// register the plugin
Vue.use(VueRouter);

let router = new VueRouter({
  routes: [
    { path: '/', component: AppContainer }
    { path: '/list', component: ListContainer }
  ]
});

new Vue({
  el: '#app-main',
  router: router,
});
