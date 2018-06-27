import Vue from 'vue';
import Router from 'vue-router';
import Header from '@/components/header/header';
import goods from '@/components/goods/goods';
import ratings from '@/components/ratings/ratings';
import seller from '@/components/seller/seller';

Vue.use(Router);
export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/header',
      name: 'header',
      component: Header
    },
    {
      path: '/goods',
      name: goods,
      component: goods
    },
    {
      path: '/ratings',
      name: ratings,
      component: ratings
    },
    {
      path: '/seller',
      name: seller,
      component: seller
    }
  ]
});
