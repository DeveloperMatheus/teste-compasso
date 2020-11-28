import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import filters from "./plugins/filters";
import axios from "axios";

Vue.config.productionTip = false;

axios.defaults.baseURL = "https://api.github.com";


new Vue({
  router,
  store,
  vuetify,
  filters,
  render: h => h(App)
}).$mount('#app')
