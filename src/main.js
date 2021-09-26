import Vue from "vue";
import App from "./App.vue";
// import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import "./utils/rem";

import ViewUI from "view-design";
Vue.use(ViewUI);
// import style
import "view-design/dist/styles/iview.css";

// uninstall serviceWorker
if (window.navigator && navigator.serviceWorker) {
  navigator.serviceWorker.getRegistrations().then(function(registrations) {
    for (let registration of registrations) {
      registration.unregister();
    }
  });
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
