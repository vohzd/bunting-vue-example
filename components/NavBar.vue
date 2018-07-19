<template lang="html">
  <nav class="master-nav">
    <nuxt-link to="/">home</nuxt-link>
    <nuxt-link to="/product">product</nuxt-link>
    <nuxt-link to="/basket/">basket ({{ basketQuantity }})</nuxt-link>
  </nav>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState([
      "basketQuantity"
    ])
  }
}
</script>

<style lang="css">
  .master-nav {
    margin: 2% 10%;
  }
</style>
