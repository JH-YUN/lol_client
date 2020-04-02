import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Test from '../views/Test.vue';
import Champion from '../views/Champion.vue';
import ChampionDetail from '../components/ChampionDetail.vue';
import ChampionList from '../components/ChampionList.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/test',
    name: 'test',
    component: Test,
  },
  {
    path: '/champion',
    name: 'champion',
    component: Champion,
    children: [
      {
        path: 'list',
        name: 'ChampionList',
        component: ChampionList,
        // props: true,
      },
      {
        path: 'detail/:id',
        name: 'championDetail',
        component: ChampionDetail,
        props: true,
      },
    ],
  },
  // {
  //   path: '/champion/list',
  //   name: 'ChampionList',
  //   component: ChampionList,
  //   // props: true,
  // },
  // {
  //   path: '/champion/detail/:id',
  //   name: 'championDetail',
  //   component: ChampionDetail,
  //   props: true,
  // },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
