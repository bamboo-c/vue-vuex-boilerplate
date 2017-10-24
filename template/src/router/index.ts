import Vue from 'vue'
import Router from 'vue-router'
import App from '../components/containers/App/'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: App
    }
  ]
})
