<template>
  <span>
    <nav-bar/>
    <nuxt />
  </span>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

import NavBar from "~/components/NavBar.vue";

export default {
  components: {
    "nav-bar": NavBar,
  }
}
</script>

<style>

  html {
    box-sizing: border-box;
    font-family: monospace;
    font-size: 23px;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }

  a {
    color: #b56d82;
    text-decoration: none;
  }

  a:hover {
    color: #d97a96;
  }

  .page {
    margin: 0 10%;
  }

  .mb {
    margin-bottom: 32px;
  }

  .container {
    margin: 0 auto;
    font-size: 0px;
  }

  .main-image, .content {
    display: inline-block;
    vertical-align: top;
    font-size: 22px;
  }

  .main-image {
    width: 25%;
  }

  .main-image img {
    width: 100%;
  }

  .content {
    width: 75%;
  }

</style>
