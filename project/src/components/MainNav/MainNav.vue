<template>
  <nav :class="navClass">
    <button
      :class="$style.toggle"
      type="button"
      @click="onButtonClick"
    >
      <span class="visually-hidden">Открыть меню</span>
    </button>

    <ul :class="$style.navList" @click="onRouteClick">
      <router-link
        v-for="link in links"
        :key="link.url"
        tag="li"
        :class="$style.navItem"
        :active-class="$style.active"
        :to="link.url"
        :exact="link.exact"
      >
        <a href="#">{{ link.title }}</a>
      </router-link>

      <router-link
        tag="li"
        :class="$style.navItem"
        :to="logoutLinkUrl"
      >
        <a href="#" @click="onExitClick">Выход</a>
      </router-link>
    </ul>
  </nav>
</template>

<script>
import { AppRoute } from '@/const';

export default {
  name: 'main-nav',
  data: () => ({
    isOpened: false,
    links: [
      { title: 'Главная', url: AppRoute.Root, exact: true },
      { title: 'Избранное', url: AppRoute.Favorites },
    ],
    logoutLinkUrl: AppRoute.Login,
  }),
  computed: {
    navClass() {
      return {
        [this.$style.navClosed]: !this.isOpened,
        [this.$style.navOpened]: this.isOpened,
      };
    },
  },
  methods: {
    onButtonClick() {
      this.isOpened = !this.isOpened;
    },
    onRouteClick() {
      this.isOpened = false;
    },
    onExitClick() {
      this.$store.commit('logout');
      this.$store.dispatch('clearFavoritesBeer');
    },
  },
};
</script>

<style module lang="scss">
  @import '@/components/MainNav/MainNav.scss';
</style>
