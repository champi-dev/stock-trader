<template>
  <div id="app">
    <h1>Testing VueJs with Foundation 6</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
/**
  customVariables are loaded in
  foundation.scss after original
  variables.scss file
*/
@import '../node_modules/foundation/scss/foundation.scss';
</style>
