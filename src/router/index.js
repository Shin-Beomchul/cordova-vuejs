import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'

Vue.use(Vuetify)
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
    }

  ]
})
