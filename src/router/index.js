import Vue from "vue";
import Router from "vue-router";
import StartAsLayout from "@/components/StartAsLayout";
import Cart from "@/components/1-Cart";
import Delivery from "@/components/2-Delivery";
import Payment from "@/components/3-Payment";
import Finish from "@/components/4-Finish";

Vue.use(Router);

export default new Router({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes: [
    {
      path: "/",
      component: StartAsLayout,
      children: [
        {
          path: "/",
          component: Cart,
          name: "Cart"
        },
        {
          path: "/delivery",
          component: Delivery,
          name: "Delivery"
        },
        {
          path: "/payment",
          component: Payment,
          name: "Payment"
        },
        {
          path: "/finish",
          component: Finish,
          name: "Finish"
        }
      ]
    }
  ]
});
