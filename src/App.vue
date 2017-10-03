<template>
  <div id="app">
    <app-header></app-header>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
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

  .slide-enter-active {
    animation: slide-in 200ms ease-out forwards;
  }

  .slide-leave-active {
    animation: slide-out 200ms ease-out forwards;
  }

  @keyframes slide-in {
    from {
      transform: translateY(-30px);
      opacity: 0;
    }
    to {
      transform: translateY(0px);
      opacity: 1;
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-30px);
      opacity: 0;
    }
  }
</style>
