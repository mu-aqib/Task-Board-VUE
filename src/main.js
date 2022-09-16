import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import Icon liberary
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)


// global components
import SvgIcon from '@/components/AllSvg.vue'
import Dialogue from '@/components/Dialogue.vue'


Vue.config.productionTip = false;
/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.component('svg-icon', SvgIcon);
Vue.component('vue-dialogue', Dialogue);


new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
