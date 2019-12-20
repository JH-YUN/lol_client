import Vue from 'vue';
import axios from './plugins/axios';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.prototype.$http = axios;
Vue.http = Vue.prototype.$http;
Vue.config.productionTip = true;

new Vue({
  router,
  store,
  vuetify,
  render(h) { return h(App); },
}).$mount('#app');
