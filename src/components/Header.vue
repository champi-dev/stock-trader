<template>
  <div>
    <div class="title-bar" data-responsive-toggle="example-menu" data-hide-for="medium">
      <button class="menu-icon" type="button" data-toggle="example-menu"></button>
      <div class="title-bar-title">Menu</div>
    </div>

    <div class="top-bar" id="example-menu">
      <div class="top-bar-left">
        <ul class="menu">
          <router-link class="menu-text app-name" tag="li" to="/">Stock Trader</router-link>
          <router-link tag="li" to="/portfolio"><a>Portfolio</a></router-link>
          <router-link tag="li" to="/stocks"><a>Stocks</a></router-link>
        </ul>
      </div>

      <div class="top-bar-right">
        <ul class="dropdown menu" data-dropdown-menu>
          <li><a href="#" @click="endDay">End Day</a></li>
          <li>
            <a href="#">Save / Load</a>
            <ul class="menu vertical">
              <li><a href="#">Save Data</a></li>
              <li><a href="#">Load Data</a></li>
            </ul>
          </li>
          <li class="menu-text"><strong>Funds: {{ funds | currency }}</strong></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    computed: {
      funds() {
        return this.$store.getters.funds;
      }
    },
    methods: {
        ...mapActions([
          'randomizeStocks'
        ]),
      endDay() {
        this.randomizeStocks();
      }
    }
  }
</script>

<style scoped>
  .app-name {
    cursor: pointer;
  }
</style>

