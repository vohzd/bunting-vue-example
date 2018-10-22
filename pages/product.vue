<template lang="html">
  <section class="page">
    <h2 class="mb">Cybex passeggino Eezy S Twist</h2>
    <div class="container">

      <div class="main-image">
        <img :src="currentProductBeingViewed.imgUrl">
      </div>

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
          <button type="button" name="button" @click="addToBasket">Add to Basket</button>
        </section>

        <section class="recommendations-wrapper">
          <div class="recommendation" v-for="recommendation in productRecsMeta">
            <a :href="recommendation.url">
              <h1>{{ recommendation.name }}</h1>
              <img :src="recommendation.image_url" />
              <span>£{{ recommendation.price }}</span>
            </a>
          </div>
        </section>

      </div>
    </div>
  </section>
</template>

<script>

import { mapState, mapActions } from "vuex";


import $ from "jquery";

export default {
  data(){
    return {
      productRecsMeta: []
    }
  },
  computed: {
    ...mapState([
      "currentProductBeingViewed",
      "productMeta"
    ])
  },
  mounted(){
    this.initBunting("product");
    this.buildRecommendations();
  },
  methods: {
    ...mapActions([
      "addToBasket",
      "initBunting",
      "updateProductKey"
    ]),
    buildRecommendations(){
      this.productRecsMeta = JSON.parse(localStorage.getItem("productRecsMeta"));
    }
  }
};


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

  .recommendations-wrapper {
    display: inline-block;
    margin-top: 32px;
  }

  .recommendation {
    display: inline-block;
    width: 19%;
    margin-right: 1%;
    text-align: center;

  }

  .recommendation h1 {
    font-size: 14px;
    margin-bottom:16px;
  }

  .recommendation img {
    width: 100%;
  }


</style>
