import Vue from 'vue'
import App from './App.vue'
let Foundation = require('foundation-sites')
import '../node_modules/foundation-sites/assets/foundation.scss'

new Vue({
  el: '#app',
  render: h => h(App)
})
