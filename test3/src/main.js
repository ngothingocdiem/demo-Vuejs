<<<<<<< HEAD
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';

// Import the style directly
=======
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';

import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';

// Import the styles directly. (Or you could add them via script tags.)
>>>>>>> 8f8cdb09e6a4438572703cc2ddc5dab6e2cb97f5
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
