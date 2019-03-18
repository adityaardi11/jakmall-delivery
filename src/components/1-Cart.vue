<template lang="pug">
  div
    h1.title Cart
    div 10 Items purchased
</template>

<script>
export default {
  mounted() {
    this.$emit("stepChanged", 0);
  },
  data() {
    return {};
  }
};
</script>