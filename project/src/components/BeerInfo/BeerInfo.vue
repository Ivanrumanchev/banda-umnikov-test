<template>
  <section :class="$style.info">
    <h2 :class="$style.title">
      Пиво на сегодня
    </h2>

    <BeerCard />

    <BeerInfoControls />
  </section>
</template>

<script>
import BeerCard from '@/components/BeerCard/BeerCard.vue';
import BeerInfoControls from '@/components/BeerInfoControls/BeerInfoControls.vue';

export default {
  name: 'beer-info',
  components: {
    BeerCard,
    BeerInfoControls,
  },
};
</script>

<style module lang="scss">
  @import '@/components/BeerInfo/BeerInfo.scss';
</style>
