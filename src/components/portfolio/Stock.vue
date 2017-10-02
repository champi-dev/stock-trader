<template>
  <div class="small-6 medium-4 cell stock">
    <div class="card-divider">
    {{ stock.name }}
    </div>

    <div class="card-section">
      <h4>Price: {{ stock.price }} | Quantity: {{ stock.quantity }}</h4>
      <div>
        <input
          type="number"
          placeholder="Quantity"
          v-model.number="quantity"
          :class="{danger: insufficientQuantity}"
        >
      </div>
      <div>
        <button
          class="button alert"
          @click="sellStock"
          :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)"
        >{{ insufficientQuantity ? 'Not enough' : 'Sell' }}</button>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    props: ['stock'],
    data() {
      return {
        quantity: 0
      }
    },
    computed: {
      insufficientQuantity() {
        return this.quantity > this.stock.quantity;
      }
    },
    methods: {
        ...mapActions({
          placeSellOrder: 'sellStock'
        }),
      sellStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        };
        this.placeSellOrder(order);
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


