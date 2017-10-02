<template>
  <div class="small-6 medium-4 cell stock">
    <div class="card-divider">
    {{ stock.name }}
    </div>

    <div class="card-section">
      <h4>Price: {{ stock.price }}</h4>
      <div>
        <input
          type="number"
          placeholder="Quantity"
          v-model.number="quantity"
        >
      </div>
      <div>
        <button
          class="button success"
          @click="buyStock"
          :disabled="quantity <= 0 || !Number.isInteger(quantity)"
        >Buy</button>
      </div>
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
    methods: {
      buyStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        };

        console.log(order);
        this.quantity = 0;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .stock {
    padding: 12px;
  }
</style>


