<template>
  <main :class="$style.main">
    <div :class="$style.wrapper" class="wrapper">
      <Logo :class="$style.logo" :size-class="$style.logoLogin"  />
      <router-link
        :class="$style.begin"
        :to="mainLinkUrl"
      >
        <button
          :class="$style.button"
          type="button"
          @click="onLinkClick"
        >
          Начать идеальный вечер!
        </button>
      </router-link>
    </div>
  </main>
</template>

<script>
import Logo from '@/components/Logo/Logo.vue';
import { AppRoute } from '@/const';

export default {
  name: 'logo',
  data: () => ({
    mainLinkUrl: AppRoute.Root,
  }),
  components: {
    Logo,
  },
  methods: {
    onLinkClick() {
      this.$store.dispatch('fetchUser');
      this.$store.dispatch('fetchBeer');
    },
  },
};
</script>

<style module lang="scss">
  @import '@/views/Login/Login.scss';
</style>
