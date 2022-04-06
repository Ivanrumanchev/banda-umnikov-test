<template>
  <img :class="[$style.logo, sizeClass]" src="@/assets/img/logo.svg" >
</template>

<script>
export default {
  name: 'logo',
  props: {
    sizeClass: String,
  },
};
</script>

<style module lang="scss">
  @import '@/components/Logo/Logo.scss';
</style>
