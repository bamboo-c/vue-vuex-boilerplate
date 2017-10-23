import Vue from 'vue'
import Router from 'vue-router'
import Index from '../index.tsx'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home
    }
  ]
})
