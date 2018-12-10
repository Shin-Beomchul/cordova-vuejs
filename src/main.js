// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'
import VueRx from 'vue-rx'
import axios from 'axios'

import item from './components/webget/item'

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(Vuetify)
Vue.use(VueRx)


Vue.component('tree', item)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App},
  template: '<App/>'
})
