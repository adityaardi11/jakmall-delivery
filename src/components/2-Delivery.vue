<template lang='pug'>
div.delivery
  router-link(:to="{path:'/'}").widget-back <- Back to cart
  div.delivery-header
    h1.title Delivery Details
    div.input-checkbox
      input(type='checkbox', :checked='$store.state.send_as_dropshipper', @change='setSendAsDropshipper')
      label Send as dropshipper
  div.input-groups
    div.input-group-inline
      div.input-field
        input(:class='input_name_state', placeholder='Name',  :value='$store.state.name', @change='setName').input
        label Name
        img(v-if='input_name_state === "input--valid"', :src="require('../assets/check.png')")
        img(v-if='input_name_state === "input--not-valid"', :src="require('../assets/close.png')")
      div.input-field
        input(placeholder='Phone Number', :value='$store.state.phone_number', @change='setPhoneNumber').input
        label Phone Number
        img(v-if='input_phone_number_state === "input--valid"', :src="require('../assets/check.png')")
        img(v-if='input_phone_number_state === "input--not-valid"', :src="require('../assets/close.png')")

      div.input-field
        textarea(required, placeholder='Delivery Address', :value='$store.state.address', @change='setAddress').input
        label Delivery Address

    div.input-group-inline
      div.input-field
        input(:class='input_dropshipper_name_state', placeholder='Dropshipper Name', :value='$store.state.dropshipper_name', @change='setDropshipperName').input
        Label Dropshipper Name
        img(v-if='input_dropshipper_name_state === "input--valid"', :src="require('../assets/check.png')")
        img(v-if='input_dropshipper_name_state === "input--not-valid"', :src="require('../assets/close.png')")

      div.input-field
        input(:class='input_dropshipper_phone_number_state', placeholder='Dropshipper Phone Number', :value='$store.state.dropshipper_phone_number', @change='setDropshipperPhoneNumber').input
        Label Dropshipper Phone Number
        img(v-if='input_dropshipper_phone_number_state === "input--valid"', :src="require('../assets/check.png')")
        img(v-if='input_dropshipper_phone_number_state === "input--not-valid"', :src="require('../assets/close.png')")


</template>

<script>
export default {
  data() {
    return {
      input_name_state: "",
      input_phone_number_state: "",
      input_address_state: "",
      input_dropshipper_name_state: "",
      input_dropshipper_phone_number_state: ""
    };
  },
  mounted() {
    this.$emit("stepChanged", 1);
  },
  methods: {
    setSendAsDropshipper(event) {
      this.$store.commit("setSendAsDropshipper", event.target.checked);
    },
    setName(event) {
      if (event.target.value != null && event.target.value != "") {
        this.input_name_state = "input--valid";
        this.$store.commit("setName", event.target.value.trim());
      } else {
        this.$store.commit("setName", "");
        this.input_name_state = "input--not-valid";
      }
    },
    testPhoneNumber(pn) {
      let test1 = pn != null && pn != "";
      if (test1) {
        let test2 = (pn.match(/\d/g) || []).length >= 6;
        let test3 = (pn.match(/\d/g) || []).length <= 20;
        let test4 = (pn.match(/[,+-]\d+/gm) || []).length === 1;
        console.log(test4);
        if (test2 && test3 && test4) {
          return true;
        }
      }
      return false;
    },
    setPhoneNumber(event) {
      if (this.testPhoneNumber(event.target.value)) {
        this.input_phone_number_state = "input--valid";
        this.$store.commit("setPhoneNumber", event.target.value);
      } else {
        this.$store.commit("setPhoneNumber", null);
        this.$store.commit("setPhoneNumber", "");
        this.input_phone_number_state = "input--not-valid";
      }
    },
    setAddress(event) {
      this.$store.commit("setAddress", event.target.value);
    },
    setDropshipperName(event) {
      if (event.target.value != null && event.target.value != "") {
        this.input_dropshipper_name_state = "input--valid";
        this.$store.commit("setDropshipperName", event.target.value.trim());
      } else {
        this.$store.commit("setDropshipperName", "");
        this.input_dropshipper_name_state = "input--not-valid";
      }
    },
    setDropshipperPhoneNumber(event) {
      if (this.testPhoneNumber(event.target.value)) {
        this.input_dropshipper_phone_number_state = "input--valid";
        this.$store.commit("setDropshipperPhoneNumber", event.target.value);
      } else {
        this.$store.commit("setDropshipperPhoneNumber", "");
        this.$store.commit("setDropshipperPhoneNumber", null);
        this.input_dropshipper_phone_number_state = "input--not-valid";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.widget-back {
  position: absolute;
  top: -1rem;
  @media (max-width: 420px) {
    position: relative;
    top: 0;
  }
}
.delivery {
  position: relative;
  .delivery-header {
    position: relative;
    .input-checkbox {
      position: absolute;
      top: 40%;
      right: 0;
      @media (max-width: 420px) {
        position: relative;
      }
      label {
        font-size: 0.8rem;
      }
    }
  }
}
.input-groups {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 0.5rem;
  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
}
.input-field {
  position: relative;
  label {
    pointer-events: none;
    position: absolute;
    font-size: 0.8rem;
    top: 50%;
    margin-top: -0.4rem;
    left: 1rem;
    color: rgba($color: #000000, $alpha: 0.4);
    transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
  }
  img {
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: -8px;
    margin-right: 1rem;
  }
}
textarea.input {
  &:focus + label {
    margin-top: -1.5rem;
    font-size: 0.7rem;
  }
  &:not(:placeholder-shown) + label {
    margin-top: -1.5rem;
    font-size: 0.7rem;
  }
  &::placeholder {
    color: transparent;
  }
  &.input--not-valid {
    color: #ff8a00;
  }
  &.input--valid {
    color: #1bd97b;
  }
}
input.input {
  &:focus + label {
    margin-top: -1rem;
    font-size: 0.7rem;
  }
  &:not(:placeholder-shown) + label {
    margin-top: -1rem;
    font-size: 0.7rem;
  }
  &::placeholder {
    color: transparent;
  }
  &.input--not-valid {
    border-color: #1bd97b;
    &:not(:placeholder-shown) + label {
      color: #ff8a00;
    }
    &:placeholder-shown + label {
      color: #ff8a00;
    }
  }
  &.input--valid {
    border-color: #1bd97b;
    &:not(:placeholder-shown) + label {
      color: #1bd97b;
    }
  }
}
</style>
