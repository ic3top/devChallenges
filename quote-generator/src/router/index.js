import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home/Home.vue';
import Query from '../views/Query.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/search/:query',
    name: 'Search',
    component: Query,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
