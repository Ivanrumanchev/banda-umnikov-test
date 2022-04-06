<template>
  <div id="app">
    <HeaderComponent />

    <router-view/>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent/HeaderComponent.vue';

export default {
  name: 'main-layout',

  components: {
    HeaderComponent,
  },
};
</script>
