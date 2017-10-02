import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import { routes } from './routes'
Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes,
  linkActiveClass: 'active'
});

import store from './store/store'

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});

// Import Foundation
import '../node_modules/foundation-sites/assets/foundation.scss'
import 'jquery'
import 'what-input'
import '../node_modules/foundation-sites/dist/js/foundation.js'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
