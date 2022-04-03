<template>
  <section :class="$style.info">
    <h2 class="title">
      Пиво на сегодня
    </h2>

    <BeerCard />

    <ButtonsControl />
  </section>
</template>

<script>
import BeerCard from '@/components/BeerCard/BeerCard.vue';
import ButtonsControl from '@/components/BeerInfoControls/BeerInfoControls.vue';

export default {
  components: {
    BeerCard,
    ButtonsControl,
  },
};
</script>

<style module lang="scss">
  @import '@/components/BeerInfo/BeerInfo.scss';
</style>
