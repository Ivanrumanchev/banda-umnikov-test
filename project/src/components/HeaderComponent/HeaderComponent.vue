<template>
  <header :class="$style.header">
    <div class="wrapper" :class="$style.wrapper">
      <Logo
        :class="$style.logo"
        :size-class="$style.logoHeader"
      />

      <MainNav />
    </div>
  </header>
</template>

<script>
import Logo from '@/components/Logo/Logo.vue';
import MainNav from '@/components/MainNav/MainNav.vue';

export default {
  name: 'header-component',
  components: {
    Logo,
    MainNav,
  },
};
</script>

<style module lang="scss" src="@/components/HeaderComponent/HeaderComponent.scss">
</style>
