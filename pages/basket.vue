<template lang="html">
  <section class="page">
    <h2 class="inline">basket</h2>
    <span class="inline small">({{ basketQuantity }} items)</span>
    <ul class="basket-summary">
      <li v-for="basketItem in basketItems"><span class="small">Product ID:</span> {{ basketItem.id }} <span class="small">Quantity:</span> {{ basketItem.quantity }}</li>
    </ul>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState([
      "basketItems",
      "basketQuantity"
    ])
  },
  methods: {
    ...mapActions([
      "initBunting"
    ])
  },
  mounted(){
    this.initBunting("basket");
  }
}
</script>

<style lang="css">

  .inline {
    display: inline;
  }

  .small {
    font-size: 14px;
  }

  .basket-summary {
    margin: 0;
    padding: 0;
    margin-top: 16px;
  }

  .basket-summary li {
    list-style: none;
    padding: 16px;
    margin-bottom: 16px;
    background: rgba(0, 0, 0, 0.07);
    border: 1px solid rgba(0, 0, 0, 0.1)
  }

</style>
