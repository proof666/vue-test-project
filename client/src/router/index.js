import Vue from 'vue';
import Router from 'vue-router';
import Logs from '@/components/Logs';
import Data from '@/components/Data';
import AddData from '@/components/AddData';

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
