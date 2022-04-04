<template>
  <section class="buttons-control">
    <h2 class="visually-hidden">
      Кнопки управления
    </h2>

    <button
      :class="$style.button"
      type="button"
      name="next"
    >
      Давай другое!
    </button>

    <button
     :class="$style.button"
      type="button"
      name="like"
    >
      В избранное
    </button>
  </section>
</template>

<style module lang="scss">
  @import '@/components/BeerInfoControls/BeerInfoControls.scss';
</style>
