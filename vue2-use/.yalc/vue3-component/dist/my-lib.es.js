import { ref, openBlock, createElementBlock, Fragment, createElementVNode, toDisplayString, pushScopeId, popScopeId, createTextVNode } from "vue";
var HelloWorld_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _withScopeId = (n) => (pushScopeId("data-v-686c5ba2"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("p", null, [
  /* @__PURE__ */ createTextVNode(" Recommended IDE setup: "),
  /* @__PURE__ */ createElementVNode("a", {
    href: "https://code.visualstudio.com/",
    target: "_blank"
  }, "VSCode"),
  /* @__PURE__ */ createTextVNode(" + "),
  /* @__PURE__ */ createElementVNode("a", {
    href: "https://github.com/johnsoncodehk/volar",
    target: "_blank"
  }, "Volar")
], -1));
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("p", null, [
  /* @__PURE__ */ createElementVNode("a", {
    href: "https://vitejs.dev/guide/features.html",
    target: "_blank"
  }, " Vite Documentation "),
  /* @__PURE__ */ createTextVNode(" | "),
  /* @__PURE__ */ createElementVNode("a", {
    href: "https://v3.vuejs.org/",
    target: "_blank"
  }, "Vue 3 Documentation")
], -1));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("p", null, [
  /* @__PURE__ */ createTextVNode(" Edit "),
  /* @__PURE__ */ createElementVNode("code", null, "components/HelloWorld.vue"),
  /* @__PURE__ */ createTextVNode(" to test hot module replacement. ")
], -1));
const _sfc_main = {
  props: {
    msg: String
  },
  setup(__props) {
    const count = ref(0);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createElementVNode("h1", null, toDisplayString(__props.msg), 1),
        _hoisted_1,
        _hoisted_2,
        createElementVNode("button", {
          type: "button",
          onClick: _cache[0] || (_cache[0] = ($event) => count.value++)
        }, "count is: " + toDisplayString(count.value), 1),
        _hoisted_3
      ], 64);
    };
  }
};
var HelloWorld = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-686c5ba2"]]);
const install = (app) => {
  app.component("HelloWorld", HelloWorld);
};
var index = { install };
export { index as default };
