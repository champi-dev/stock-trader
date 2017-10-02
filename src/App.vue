<template>
  <div id="app">
      <app-header></app-header>
  </div>
</template>

<script>
  import Header from './Header.vue'

  export default {
    name: 'app',
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

<style lang="sass">

</style>
