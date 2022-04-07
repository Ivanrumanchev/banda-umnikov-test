<template>
  <main :class="$style.main">
    <div class="wrapper" :class="$style.wrapper">
      <h1 class="visually-hidden">
        Выбор пива
      </h1>

      <UserInfo :class="$style.user" />

      <BeerInfo :class="$style.beer" />
    </div>
  </main>
</template>

<script>
import BeerInfo from '@/components/BeerInfo/BeerInfo.vue';
import UserInfo from '@/components/UserInfo/UserInfo.vue';

export default {
  name: 'home',
  components: {
    UserInfo,
    BeerInfo,
  },
};
</script>

<style module lang="scss" src="@/views/Home/Home.scss">
</style>
