<template>
  <main class="wrapper">
    <h1>Выбор пива</h1>
    <UserInfo />
    <BeerInfo />
  </main>
</template>

<script>
import BeerInfo from '@/components/BeerInfo/BeerInfo.vue';
import UserInfo from '@/components/UserInfo/UserInfo.vue';

export default {
  name: 'Home',
  components: {
    UserInfo,
    BeerInfo,
  },
};
</script>

<style module>

</style>
