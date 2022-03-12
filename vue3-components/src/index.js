import HelloWorld from "./components/HelloWorld.vue";

const install = (app) => {
  app.component("HelloWorld", HelloWorld);
};

export default { install };
