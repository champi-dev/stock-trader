<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/Header.vue'

  export default {
    name: 'app',
    created() {
      this.$store.dispatch('initStocks');
    },
    mounted() {
      // Set foundation to the document. Necessary for
      // foundation plugins
      $(document).foundation();
    },
    components: {
      appHeader: Header
    }
  }
</script>

<style lang="scss">
  body {
    padding: 20px;
  }
</style>
