<template lang='pug'>
div
  router-link(:to='{path:"/payment"}') <- Back to payment
  div
    h1.title Thank You
    div your order will be delivered today with {{ $store.state.shipment }}
    router-link(:to='{name:"Cart"}') <- Go to Homepage
</template>

<script>
export default {
  mounted() {
    this.$emit("stepChanged", 3);
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
