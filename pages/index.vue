<template>
  <section class="page">
    <h2>Super site</h2>
  </section>
</template>

<script>

import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions([
      "initBunting"
    ])
  },
  mounted(){
    this.initBunting("homepage");
  }
}

</script>



<style>


</style>
