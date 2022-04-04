<template>
  <main :class="$style.main">
    <div :class="$style.wrapper" class="wrapper">
      <Logo :class="$style.logo" :size-class="$style.logoLogin"  />
      <a :class="$style.begin" href="/">Начать идеальный вечер!</a>
    </div>
  </main>
</template>

<script>
import Logo from '@/components/Logo/Logo.vue';

export default {
  name: 'logo',
  components: {
    Logo,
  },
};
</script>

<style module lang="scss">
  @import '@/views/Login/Login.scss';
</style>
