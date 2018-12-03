// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import io from 'socket.io-client';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.prototype.$io = io('localhost:8081', {
  'sync disconnect on unload': true,
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
