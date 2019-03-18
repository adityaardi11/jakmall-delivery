<template lang='pug'>
  div.card
    div.card-header
      div.step-links
        router-link(:to={path:"/delivery"}).step-link-item
          span.step-link-item-circle 1
          span.step-link-item-label Delivery
        router-link(:to={path:"/payment"}).step-link-item
          span.step-link-item-circle 2
          span.step-link-item-label Payment
        router-link(:to={path:"/finish"}).step-link-item
          span.step-link-item-circle 3
          span.step-link-item-label Finish
    div.card-body
      div.card-body-content
        router-view(@stepChanged='stepChanged')
      div.card-body-aside
        Summary(:step='step')
</template>

<script>
import Summary from "./5-Summary";

export default {
  components: {
    Summary
  },
  data() {
    return {
      step: 0
    };
  },
  methods: {
    stepChanged(value) {
      this.step = value;
    }
  }
};
</script>

<style lang='scss'>
$smartphone-width: 420px;

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
#app {
  font-family: "Avenir", Courier, monospace;
  background-color: #fffae6;
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: 4rem;
  @media (max-width: $smartphone-width) {
    padding-top: 0;
  }
}

.input {
  width: 100%;
  font-size: 0.825rem;
  box-sizing: border-box;
  display: block;
  padding: 1.5rem 1rem 0.5rem 1rem;
  margin-bottom: 0.2rem;
  border-radius: 3px;
  border: 1px solid black;
}

.card {
  background-color: white;
  width: 48rem;
  @media (max-width: $smartphone-width) {
    width: 100%;
  }
  padding: 0 0 2rem 0;
  margin: 0 auto 0 auto;
  border-radius: 3px;
  box-shadow: 0 10px 20px rgba(156, 156, 156, 0.19),
    0 6px 6px rgba(155, 155, 155, 0.23);
  .card-header {
    position: relative;
    width: 100%;
    height: 2rem;
  }
  .card-body {
    position: relative;
    padding-top: 1rem;
    display: grid;
    grid-template-columns: 1fr 14rem;
    padding-left: 2rem;
    padding-right: 2rem;
    grid-column-gap: 2rem;

    @media (max-width: 420px) {
      grid-template-columns: 1fr;
    }

    .card-body-content {
      padding-right: 1rem;
      padding-top: 1rem;
    }

    .title {
      font-family: "Montserrat";
      color: #ff8a00;
      position: relative;
      display: inline-block;
      z-index: 1;
      &::after {
        content: "";
        position: absolute;
        height: 0.5rem;
        background-color: rgba(0, 0, 0, 0.1);
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
      }
    }
  }
}
.step-links {
  text-align: center;
  background-color: #fffae6;
  width: 60%;
  top: -1rem;
  padding: 0.5rem 0;
  position: absolute;
  @media (max-width: $smartphone-width) {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    margin-left: 0;
    background-color: none;
    border-radius: 0;
  }
  display: block;
  left: 50%;
  margin-left: -30%;
  border-radius: 2rem;
  .step-link-item {
    text-decoration: none;
    display: inline-block;
    &:not(:last-child) {
      margin-right: 0.5rem;
    }
    &:not(:last-child):after {
      content: ">";
      margin-left: 0.5rem;
    }
    .step-link-item-circle {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 2rem;
      height: 2rem;
      background-color: #ff8a00;
      border-radius: 100%;
      color: white;
      margin-right: 0.2rem;
    }
  }
}
</style>
