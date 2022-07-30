import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";

// global components
import SvgIcon from '@/components/AllSvg.vue'

Vue.config.productionTip = false;

Vue.component('svg-icon', SvgIcon);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
