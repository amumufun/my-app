import vikeVue from "vike-vue/config";
import type { Config } from "vike/types";
import Head from "../layouts/HeadDefault.vue";
import Layout from "../layouts/LayoutDefault.vue";

// Default config (can be overridden by pages)
export default {
  Layout,
  Head,
  // <title>
  //# BATI.has("auth0") || BATI.has("firebase-auth") || BATI.has("authjs")
  passToClient: ["user"],
  title: "My Vike App",
  extends: vikeVue,
  stream: "web",
  bodyHtmlEnd: '<div class="test">1111111</div>',
} satisfies Config;
