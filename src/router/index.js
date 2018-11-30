import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Rx from '@/components/Rx'
import Jstutorial from '@/components/JsTutorial'

Vue.use(Router)

export default new Router({
  /* if App : hash
  *     web : history */
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/rx',
      name: 'rx',
      component: Rx
    },
    {
      path: '/jsBasic',
      name: 'jsBasic',
      component: Jstutorial
    }

  ]
})
