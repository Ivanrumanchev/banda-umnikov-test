<template>
  <section class="buttons-control">
    <h2 class="visually-hidden">
      Кнопки управления
    </h2>

    <button
      :class="$style.button"
      type="button"
      name="next"
      @click="onNextButtonClick"
      :disabled="beerLoading"
    >
      Давай другое!
    </button>

    <button
     :class="$style.button"
      type="button"
      name="like"
      @click="onFavoritesClick"
      :disabled="beerFavorite"
    >
      В избранное
    </button>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'beer-info-controls',
  methods: {
    onNextButtonClick() {
      this.$store.dispatch('fetchBeer');
      this.$store.commit('removeFavoriteBeer');
    },
    onFavoritesClick() {
      this.$store.dispatch('addBeerToFavorites');
      this.$store.commit('setFavoriteBeer');
    },
  },
  computed: mapGetters(['beerLoading', 'beerFavorite']),
};
</script>

<style module lang="scss">
  @import '@/components/BeerInfoControls/BeerInfoControls.scss';
</style>
