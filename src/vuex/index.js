import Vue from "vue";
import Vuex from "vuex";
import jsCookie from "js-cookie";

Vue.use(Vuex);

let _store = jsCookie.getJSON("store")
  ? jsCookie.getJSON("store")
  : {
      send_as_dropshipper: "",
      count: "",
      name: "",
      phone_number: "",
      address: "",
      dropshipper_name: "",
      dropshipper_phone_number: "",
      shipment: "",
      payment: ""
    };

export default new Vuex.Store({
  state: {
    send_as_dropshipper: _store.send_as_dropshipper,
    count: 0,
    name: _store.name,
    phone_number: _store.phone_number,
    address: _store.address,
    dropshipper_name: _store.dropshipper_name,
    dropshipper_phone_number: _store.dropshipper_phone_number,
    shipment: _store.shipment,
    payment: _store.payment
  },
  mutations: {
    setSendAsDropshipper(state, send_as_dropshipper) {
      state.send_as_dropshipper = send_as_dropshipper;
    },
    setName(state, name) {
      state.name = name;
    },
    setPhoneNumber(state, phone_number) {
      state.phone_number = phone_number;
    },
    setAddress(state, address) {
      state.address = address;
    },
    setDropshipperName(state, dropshipper_name) {
      state.dropshipper_name = dropshipper_name;
    },
    setDropshipperPhoneNumber(state, dropshipper_phone_number) {
      state.dropshipper_phone_number = dropshipper_phone_number;
    },
    setShipment(state, shipment) {
      state.shipment = shipment;
    },
    setPayment(state, payment) {
      state.payment = payment;
    }
  }
});
