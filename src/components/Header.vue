<template>
  <div>
    <div class="title-bar" data-responsive-toggle="main-nav" data-hide-for="medium">
      <button class="menu-icon" type="button" data-toggle="main-nav"></button>
      <div class="title-bar-title">Menu</div>
    </div>

    <div class="top-bar" id="main-nav">
      <div>
        <ul class="menu vertical medium-horizontal">
            <router-link class="menu-text app-name" tag="li" to="/">Stock Trader</router-link>
            <router-link tag="li" to="/portfolio"><a>Portfolio</a></router-link>
            <router-link tag="li" to="/stocks"><a>Stocks</a></router-link>
        </ul>
      </div>

      <div>
        <ul class="dropdown menu vertical medium-horizontal" data-responsive-menu="drilldown medium-dropdown">
          <li class="small-order-2"><a href="#" @click="endDay">End Day</a></li>
          <li class="small-order-3">
            <a href="#">Save / Load</a>
            <ul class="menu vertical">
              <li><a href="#" @click="saveData">Save Data</a></li>
              <li><a href="#" @click="loadData">Load Data</a></li>
            </ul>
          </li>
          <li class="menu-text small-order-1"><strong>Funds: {{ funds | currency }}</strong></li>
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
        ...mapActions({
          randomizeStocks: 'randomizeStocks',
          fetchData: 'loadData'
        }),
      endDay() {
        this.randomizeStocks();
      },
      saveData() {
        const data = {
          funds: this.$store.getters.funds,
          stockPortfolio: this.$store.getters.stockPortfolio,
          stocks: this.$store.getters.stocks
        };
        this.$http.put('data.json', data);
      },
      loadData() {
        this.fetchData();
      }
    }
  }
</script>

<style lang="scss" scoped>
  .app-name {
    cursor: pointer;
    @media screen and (max-width: 640px) {
      text-align: center;
    }
  }
</style>

