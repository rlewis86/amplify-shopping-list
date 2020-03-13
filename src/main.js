import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// Import Bootstrap Vue
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Import Amplify Modules, Plugins, and aws exports file
import Amplify, * as AmplifyModules from "aws-amplify";
import { AmplifyPlugin } from "aws-amplify-vue";
import awsconfig from "./aws-exports";

// Configure Amplify in project
Amplify.configure(awsconfig);

// configure vue to use plugins and modules
Vue.use(AmplifyPlugin, AmplifyModules);

// configure vue to use BootstrapVue and Icon Pack
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
