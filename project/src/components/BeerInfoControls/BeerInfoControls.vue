<template>
  <section class="buttons-control">
    <h2 class="visually-hidden">
      Кнопки управления
    </h2>

    <button
      :class="$style.button"
      type="button"
      name="next"
      :disabled="beerLoading"
      @click="onNextButtonClick"
    >
      Давай другое!
    </button>

    <button
      :class="$style.button"
      type="button"
      name="like"
      :disabled="beerFavorite"
      @click="onFavoritesClick"
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
      this.$store.commit('setFavoriteBeer', false);
    },
    onFavoritesClick() {
      this.$store.dispatch('addBeerToFavorites');
      this.$store.commit('setFavoriteBeer', true);
    },
  },
  computed: mapGetters(['beerLoading', 'beerFavorite']),
};
</script>

<style module lang="scss" src="@/components/BeerInfoControls/BeerInfoControls.scss">
</style>
