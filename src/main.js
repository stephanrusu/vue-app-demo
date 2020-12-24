import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./utils/filters";

Vue.config.productionTip = false;

import "./styles/tailwind.css";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
