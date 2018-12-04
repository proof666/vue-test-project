import Vue from 'vue';
import io from 'socket.io-client';

Vue.config.productionTip = false;
Vue.prototype.$io = io('localhost:8081', {
  'sync disconnect on unload': true,
});

const fetchPolifill = require('whatwg-fetch');

global.fetch = fetchPolifill.fetch;
global.Request = fetchPolifill.Request;
global.Headers = fetchPolifill.Headers;
global.Response = fetchPolifill.Response;
