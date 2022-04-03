<template>
  <header :class="$style.header">
    <div class="header__wrapper">
      <Logo class="header__logo" />

      <nav class="main-nav main-nav--closed">
        <button class="main-nav__toggle" type="button">
          <span class="visually-hidden">Открыть меню</span>
        </button>

        <ul class="main-nav__list">
          <li class="main-nav__item">
            <a href="/">Главная</a>
          </li>

          <li class="main-nav__item">
            <a href="/favorites">Избранное</a>
          </li>

          <li class="main-nav__item">
            <a href="/login">Выход</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import Logo from '@/components/Logo/Logo.vue';

export default {
  components: {
    Logo,
  },
};
</script>

<style module lang="scss">
  @import '@/components/Header/Header.scss';
</style>
