<template lang="html">
  <section class="page">
    <h2 class="mb">Cybex passeggino Eezy S Twist</h2>
    <div class="container">
<!--
      <div class="main-image">
        <img :src="productMeta[productKey].imgUrl">
      </div>-->

      <div class="content">
        <p>Il nuovo passeggino leggero Cybex Eezy S Twist è ultracompatto, progettato per i genitori che adorano viaggiare. Si utilizza dai 6 mesi del bimbo ai 4 anni circa (17 kg).</p>
        <span class="product-id">ID: {{ currentProductBeingViewed.productId }}</span>
        <span class="product-price">€{{ currentProductBeingViewed.price }}</span>

        <section class="interaction">
          <select :value="currentProductBeingViewed.productId" v-on:change="updateProductKey" class="select-colour">
            <option value="10488">denim blue</option>
            <option value="10484">manhatten grey</option>
            <option value="10485">passion pink</option>
            <option value="10487">rebel-red</option>
          </select>
          <button type="button" name="button" @click="testage">Add to Basket</button>

        </section>


        <div id="magical">

        </div>

      </div>

    </div>

  </section>
</template>

<script>

import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState([
      "currentProductBeingViewed",
      "productMeta"
    ])
  },
  mounted(){
    this.initBunting("product");
  },
  methods: {
    ...mapActions([
      "addToBasket",
      "initBunting",
      "updateProductKey"
    ]),
    testage(){
    }/*
    updateProductKey(a){
     console.log(a);
   }*/
  },
}
</script>

<style lang="css">
  .interaction {
    margin-top: 16px;
  }

  .interaction select, .interaction button {
    padding: 16px;
    font-family: monospace;
  }

  .interaction button {
    background: rgb(158, 81, 131);
    color: white;
    border: none;
  }

  button:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  .product-id {
    display: inline-block;
    margin: 8px 0;
    font-size: 10px;
    background: rgba(0,0,0,0.07);
    padding: 8px
  }

  .product-price {
    display: inline-block;
    font-size: 22px;
    font-weight: bold;
  }
</style>
