import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//plugin
import "bootstrap";
import "popper.js";
import "jquery";
//bv
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue,IconsPlugin)
//other
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
