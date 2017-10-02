import Vue from 'vue'
import App from './App.vue'

// Import Foundation
import '../node_modules/foundation-sites/assets/foundation.scss'
import 'jquery'
import 'what-input'
import '../node_modules/foundation-sites/dist/js/foundation.js'

new Vue({
  el: '#app',
  render: h => h(App)
})
