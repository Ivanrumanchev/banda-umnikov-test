<template>
  <main class="wrapper">
    <h1>Понравившееся пиво</h1>
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
  </main>

</template>

<script>
import BeerCard from '@/components/BeerCard/BeerCard.vue';

export default {
  components: {
    BeerCard,
  },
};
</script>
