import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Login from '@/components/Login'

Vue.use(Router)


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        default: Main
      }
    },
    {
      path: '/login',
      component: Login
    }

  ]
})
