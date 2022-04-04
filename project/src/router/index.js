import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'main' },
    component: () => import('@/views/Home/Home.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    meta: { layout: 'empty' },
    component: () => import('@/views/Login/Login.vue'),
  },
  {
    path: '/favorites',
    name: 'Favorites',
    meta: { layout: 'main' },
    component: () => import('@/views/Favorites/Favorites.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
