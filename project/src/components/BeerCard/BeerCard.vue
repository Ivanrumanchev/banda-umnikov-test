<template>
  <article :class="$style.card">
    <h2 class="visually-hidden">
      Информация о пиве
    </h2>

    <dl :class="$style.cardsList">
      <dt :class="$style.category">Brand</dt>
      <dd :class="$style.description">Lowenbrau</dd>

      <dt :class="$style.category">Name</dt>
      <dd :class="$style.description">Stone Imperial Russian Stout</dd>

      <dt :class="$style.category">Alcohol</dt>
      <dd :class="$style.description">6.2%</dd>
    </dl>
  </article>
</template>

<style module lang="scss">
  @import '@/components/BeerCard/BeerCard.scss';
</style>
