<template lang="pug">
  div.summary
    div(v-if='step!=0')
      h2.summary-title Summary
      div.sub-text
        div 10 Items Purchased
        div.divider
        div(v-if='$store.state.shipment')
          div
            b Delivery Estimation
          div today by {{ $store.state.shipment }}
          div.divider
        div(v-if='$store.state.payment')
          div
            b Payment method
          div {{ $store.state.payment }}
        div.summary-summary
          div
            div Cost of Goods
            div
              b 500.000
          div
            div Dropshipping Fee
            div
              b 5.900
          div
            div
              b {{ $store.state.shipment }}
              | {{ " " }}shipment
            div
              b 15.900
          div.total
            div.total-text Total
            div.total-amount 505.900
    div(v-if='step!=3')
      router-link(:to='{name : getNextStepLinkName}').button {{ getNextStepName }}
</template>

<script>
export default {
  props: ["step"],
  computed: {
    getNextStepLinkName() {
      if (this.step === 0) return "Delivery";
      if (this.step === 1) return "Payment";
      if (this.step === 2) return "Finish";
    },
    getNextStepName() {
      if (this.step === 0) return "Checkout";
      if (this.step === 1) return "Continue to Payment";
      if (this.step === 2)
        return this.$store.state.payment
          ? "Pay with " + this.$store.state.payment
          : "Payment";
      return "...";
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  color: white;
  background-color: #ff8a00;
  padding: 0.5rem 1rem;
  display: block;
  text-align: center;
  text-decoration: none;
  border-radius: 3px;
  box-shadow: 0 10px 20px rgba(156, 156, 156, 0.19),
    0 6px 6px rgba(155, 155, 155, 0.23);
}
.summary {
  .sub-text {
    font-size: 0.8rem;
  }
  .features {
    margin-bottom: 1rem;
  }
  .summary-summary {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr;
    > div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      > div:nth-child(2) {
        text-align: right;
      }
    }
    .total {
      font-family: "Montserrat";
      color: #ff8a00;
      font-weight: bold;
      font-size: 1rem;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }
}
.summary-title {
  font-family: "Montserrat";
  color: #ff8a00;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}
.divider {
  height: 0.3rem;
  display: block;
  width: 3rem;
  background-color: rgba(155, 155, 155, 0.23);
  margin-bottom: 1rem;
  margin-top: 1rem;
}
</style>
