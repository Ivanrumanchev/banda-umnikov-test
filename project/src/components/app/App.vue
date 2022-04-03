<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
  // @import style from '@/app.scss';
  @import '@/components/app/app.scss';
  // #app {
  //   // color: $basic_color;
  //   color: $basic_color;
  //   // color: red;
  // }
</style>
