import Vue from "vue";
import App from "./App.vue";
import VueCompositionApi from "@vue/composition-api";
import HellowWorld from "vue3-component";

Vue.config.productionTip = false;
Vue.use(VueCompositionApi);
Vue.use(HellowWorld);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
