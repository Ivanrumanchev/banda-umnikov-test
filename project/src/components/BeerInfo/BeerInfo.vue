<template>
  <section :class="$style.info">
    <h2 :class="$style.title">
      Пиво на сегодня
    </h2>

    <BeerCard
      :beer="beer"
      :status="status"
    />

    <BeerInfoControls />
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import BeerCard from '@/components/BeerCard/BeerCard.vue';
import BeerInfoControls from '@/components/BeerInfoControls/BeerInfoControls.vue';

export default {
  name: 'beer-info',
  components: {
    BeerCard,
    BeerInfoControls,
  },
  computed: {
    ...mapGetters([
      'beerId',
      'beerBrand',
      'beerName',
      'beerAlcohol',
      'beerFavorite',
      'beerLoading',
      'beerError',
    ]),
    beer() {
      return {
        id: this.beerId,
        brand: this.beerBrand,
        name: this.beerName,
        alcohol: this.beerAlcohol,
        isFavorite: this.beerFavorite,
      };
    },
    status() {
      return {
        loading: this.beerLoading,
        error: this.beerError,
      };
    },
  },

};
</script>

<style module lang="scss" src="@/components/BeerInfo/BeerInfo.scss">
</style>
