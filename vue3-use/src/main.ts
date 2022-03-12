import { createApp } from "vue";
import App from "./App.vue";
import HelloWorld from "vue3-component";

const app = createApp(App);
app.use(HelloWorld);
app.mount("#app");
