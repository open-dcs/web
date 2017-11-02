import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Connect from '@/components/Connect'
import Configure from '@/components/Configure'
// TODO Put status components under components/Status
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  hashbang: false,
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/connect',
      name: 'Connect',
      component: Connect
    },
    {
      path: '/configure',
      name: 'Configure',
      component: Configure
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
