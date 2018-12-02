import Vue from 'vue';
import Router from 'vue-router';
import Logs from '@/views/Logs';
import Data from '@/views/Data';
import AddData from '@/views/AddData';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/addData',
    },
    {
      path: '/logs',
      name: 'Logs',
      component: Logs,
    },
    {
      path: '/data',
      name: 'Data',
      component: Data,
    },
    {
      path: '/addData',
      name: 'AddData',
      component: AddData,
    },
  ],
});
