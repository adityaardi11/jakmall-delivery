<template lang='pug'>
div
  router-link(:to='{path:"/delivery"}') <- Back to delivery
  div
    h1.title Shipment
  div
    div(v-for='s in ["GO-SEND", "JNE", "Personal Courier"]').input-radio
      input(type='radio', name='shipment', :value='s' v-model='shipment', @change='setShipment')
      label {{ s }}
      img(v-if='shipment === s', :src="require('../assets/check.png')")

  div
    h1.title Payment
  div
    div(v-for='p in ["E-Wallet", "Bank Transfer", "Virtual Account"]').input-radio
      input(type='radio', name='payment',:value='p', v-model='payment', @change='setPayment')
      label {{ p }}
      img(v-if='payment === p', :src="require('../assets/check.png')")

</template>

<script>
export default {
  mounted() {
    this.$emit("stepChanged", 2);
    this.shipment = this.$store.state.shipment;
    this.payment = this.$store.state.payment;
  },
  watch: {},
  data() {
    return {
      shipment: "",
      payment: ""
    };
  },
  methods: {
    setShipment(event) {
      this.$store.commit("setShipment", this.shipment);
    },
    setPayment(event) {
      this.$store.commit("setPayment", this.payment);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.input-radio {
  position: relative;
  display: inline-block;
  input[type="radio"] {
    display: inline-block;
    width: 8rem;
    height: 3rem;
    border: 1px solid black;
    appearance: none;
    border-radius: 3px;
    &:checked {
      border: 2px solid #1bd97b;
    }
    &:checked + label {
      font-weight: bold;
    }
  }
  label {
    position: absolute;
    left: 1rem;
    top: 0.8rem;
    font-size: 0.8rem;
    pointer-events: none;
  }
  img {
    position: absolute;
    top: 50%;
    right: 1rem;
  }
}
</style>
