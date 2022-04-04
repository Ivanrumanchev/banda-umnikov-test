<template>
  <main :class="$style.main">
    <div class="wrapper">

      <h1 :class="$style.title">Понравившееся пиво</h1>
      <ul>
        <li>
          <BeerCard />
        </li>
        <li>
          <BeerCard />
        </li>
        <li>
          <BeerCard />
        </li>
      </ul>
    </div>
  </main>

</template>

<script>
import BeerCard from '@/components/BeerCard/BeerCard.vue';

export default {
  name: 'favorites',
  components: {
    BeerCard,
  },
};
</script>

<style module lang="scss">
  @import '@/views/Favorites/Favorites.scss';
</style>
