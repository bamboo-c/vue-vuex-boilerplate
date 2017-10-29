import Vue from 'vue';
import VueRouter from 'vue-router';

// conatiners
import { AppContainer } from '../components/containers/App/';
import { ListContainer } from '../components/containers/List/';

// modules
import { Navbar } from '../components/modules/Navbar/';

// ui
import { Button } from '../components/ui/Button/';

// register the plugin
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [{
    name: 'root',
    path: '/',
    redirect: 'index',
    component: AppContainer,
  }, {
    component: Counter,
    name: 'counter',
    path: '/counter',
  }, {
    component: ListContainer,
    name: 'list',
    path: '/list',
  },],
});

export default router;
