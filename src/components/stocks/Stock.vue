<template>
  <div class="small-6 medium-4 cell stock">
    <div class="card-divider">
    {{ stock.name }} | Price: {{ stock.price | currency}}
    </div>

    <div class="card-section">
        <input
          type="number"
          placeholder="Quantity"
          v-model.number="quantity"
          :class="{danger: insufficientFunds}"
        >

        <button
          class="button success"
          @click="buyStock"
          :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)"
        >{{ insufficientFunds ? 'Insufficient Funds' : 'Buy' }}</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['stock'],
    data() {
      return {
        quantity: 0
      }
    },
    computed: {
      funds() {
        return this.$store.getters.funds;
      },
      insufficientFunds() {
        return this.quantity * this.stock.price > this.funds;
      }
    },
    methods: {
      buyStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        };

        this.$store.dispatch('buyStock', order);
        this.quantity = 0;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .stock {
    padding: 12px;
  }

  .danger {
    border: 1px solid red;
  }
</style>


