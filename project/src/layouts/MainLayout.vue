<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue';

export default {
  name: 'main-layout',

  components: {
    Header,
  },
};
</script>
