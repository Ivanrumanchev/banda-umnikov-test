<template>
  <main :class="$style.main">
    <div class="wrapper">

      <h1 :class="$style.title">Понравившееся пиво</h1>

      <ul v-if="favorites.length !== 0" :class="$style.favoritesList">
        <li v-for="favorite in favorites" :key="favorite.id">
          <BeerCard :beer="getBeerProp(favorite)" :status="getStatusProp()" />
        </li>
      </ul>
      <p v-else :class="$style.empty" >Пока что ни одного напитка не было добавлено в избранное.</p>
    </div>
  </main>

</template>

<script>
import { mapGetters } from 'vuex';
import BeerCard from '@/components/BeerCard/BeerCard.vue';

export default {
  name: 'favorites',
  components: {
    BeerCard,
  },
  computed: mapGetters(['favorites']),
  methods: {
    getBeerProp(beer) {
      return {
        brand: beer.brand,
        name: beer.name,
        alcohol: beer.alcohol,
        isFavorite: true,
      };
    },
    getStatusProp() {
      return {
        loading: false,
        error: '',
      };
    },
  },
};
</script>

<style module lang="scss">
  @import '@/views/Favorites/Favorites.scss';
</style>
