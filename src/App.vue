<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    mounted() {
      // Set foundation to the document. Necessary for
      // foundation plugins
      $(document).foundation();
    }
  }
</script>

<style lang="sass">

</style>
