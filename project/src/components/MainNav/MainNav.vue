<template>
  <nav :class="navClass">
    <button
      :class="$style.toggle"
      type="button"
      @click="onButtonClick"
    >
      <span class="visually-hidden">Открыть меню</span>
    </button>

    <ul :class="$style.navList">
      <li :class="[$style.navItem, { [$style.active] : this.isActive }]">
        <a href="/">Главная</a>
      </li>

      <li :class="$style.navItem">
        <a href="/favorites">Избранное</a>
      </li>

      <li :class="$style.navItem">
        <a href="/login">Выход</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'main-nav',
  data: () => ({
    isOpened: false,
    isActive: true,
  }),
  computed: {
    navClass() {
      return {
        [this.$style.navClosed]: !this.isOpened,
        [this.$style.navOpened]: this.isOpened,
      };
    },
  },
  methods: {
    onButtonClick() {
      this.isOpened = !this.isOpened;
    },
  },
};
</script>

<style module lang="scss">
  @import '@/components/MainNav/MainNav.scss';
</style>
