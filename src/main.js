import Vue from 'vue'
import App from './App.vue'
let Foundation = require('foundation')
import '../node_modules/foundation/scss/normalize.scss'
import '../node_modules/foundation/scss/foundation.scss'

new Vue({
  el: '#app',
  render: h => h(App)
})
