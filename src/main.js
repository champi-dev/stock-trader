import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'

import { routes } from './routes'
import store from './store/store'

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://trader-vue.firebaseio.com/';

const router = new VueRouter({
  mode: 'history',
  routes,
  linkActiveClass: 'active'
});

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});

// Import Foundation
import './foundation-sites/assets/foundation.scss'
import 'jquery'
import 'what-input'
import './foundation-sites/dist/js/foundation'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
