import Vue from 'vue';
import VueRouter from 'vue-router';

import './styles/main.scss';

import { App } from './components/containers/App/';

// register the plugin
Vue.use(VueRouter);

let router = new VueRouter({
  routes: [
    { path: '/', component: App }
});

