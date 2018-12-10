import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Rx from '@/components/Rx'
import RxZip from '@/components/RxZip'
import Jstutorial from '@/components/JsTutorial'
import WatchCompute from '@/components/WatchComputed'
import todoPure from '@/components/TODOpureJS'
import todovue from '@/components/TODOVueJS'
import todoGroup from '@/components/TODOGroup'

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
      path: '/jsBasic',
      name: 'jsBasic',
      component: Jstutorial
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
      path: '/rxZip',
      name: 'rxZip',
      component: RxZip
    },
    {
      path: '/wc',
      name: 'wc',
      component: WatchCompute
    },
    {
      path: '/todoPure',
      name: 'TODOpureJS',
      component: todoPure
    },
    {
      path: '/todoVue',
      name: 'TODOVueJs',
      component: todovue
    },
    {
      path: '/todoGroup',
      name: 'TODOGroup',
      component: todoGroup
    }

  ]
})
