import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';

/**
 * diem create bootstrap & bootstrap-vue 24-7-2020
 */
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'; // diem create 24/7/2020

// Import the styles directly. (Or you could add them via script tags.)
import 'bootstrap/dist/css/bootstrap.css'; // diem 24/7/2020
import 'bootstrap-vue/dist/bootstrap-vue.css'; // diem 24/7/2020

Vue.use(BootstrapVue); // diem 24/7/2020

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
