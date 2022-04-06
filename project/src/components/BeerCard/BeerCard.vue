<template>
  <article :class="$style.card">
    <h2 class="visually-hidden">
      Информация о пиве
    </h2>

    <Loader v-if="status.loading" :class="$style.cardsList"/>
    <dl v-else :class="$style.cardsList">
      <dt :class="$style.category">Brand</dt>
      <dd :class="$style.description">{{ beer.brand }}</dd>

      <dt :class="$style.category">Name</dt>
      <dd :class="$style.description">{{ beer.name }}</dd>

      <dt :class="$style.category">Alcohol</dt>
      <dd :class="$style.description">{{ beer.alcohol }}</dd>
    </dl>

    <p v-if="status.error" :class="$style.errorMessage">{{ status.error }}</p>

    <button
      v-if="beer.isFavorite"
      :class="$style.favorite"
      @click="onFavoriteButtonClick"
    >
      Удалить из избранного
    </button>
  </article>
</template>

<script>
import Loader from '@/components/Loader/Loader.vue';

export default {
  name: 'beer-card',
  props: {
    beer: {
      brand: String,
      name: String,
      alcohol: String,
      isFavorite: Boolean,
    },
    status: {
      loading: String,
      error: String,
    },
  },
  components: {
    Loader,
  },
  methods: {
    onFavoriteButtonClick() {
      this.$store.dispatch('removeBeerFromFavorites');
    },
  },
};
</script>

<style module lang="scss">
  @import '@/components/BeerCard/BeerCard.scss';
</style>
