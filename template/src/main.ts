import Vue from 'vue';
import { sync } from 'vuex-router-sync'
import router from './router'
import store from './stores'
import { Navbar } from './components/modules/Navbar/'

// import styles
import './styles/main.scss';

sync(store, router)

new Vue({
  el: '#app-main',
  router: router,
  components: {
    'navbar': Navbar
  }
});
