import Vue from 'vue';
import App from '@/App.vue';
import store from '@/store';
import router from '@/router';
import vuetify from '@/plugins/vuetify';
import '@/registerServiceWorker';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  store,
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
