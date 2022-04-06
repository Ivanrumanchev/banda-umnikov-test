import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import { AppRoute } from '@/const';

Vue.use(VueRouter);

const routes = [
  {
    path: AppRoute.Root,
    name: 'Home',
    meta: {
      layout: 'main',
      requiredAuth: true,
    },
    component: () => import('@/views/Home/Home.vue'),
  },
  {
    path: AppRoute.Login,
    name: 'Login',
    meta: { layout: 'empty' },
    component: () => import('@/views/Login/Login.vue'),
  },
  {
    path: AppRoute.Favorites,
    name: 'Favorites',
    meta: {
      layout: 'main',
      requiredAuth: true,
    },
    component: () => import('@/views/Favorites/Favorites.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    meta: {
      layout: 'empty',
    },
    component: () => import('@/components/notFoundScreen/notFoundScreen.vue'),
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiredAuth && !store.getters.userLogged) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;
