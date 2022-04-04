<template>
  <section :class="$style.userInfo">
    <div :class="$style.wrapper">
      <h2 class="visually-hidden">
        Информация о пользователе
      </h2>

      <div :class="$style.avatar">
        <img :class="$style.avatarImg" src="@/assets/img/user.jpg" alt="Аватар" width="140">
      </div>

      <ul :class="$style.infoList">
        <li :class="$style.infoItem">Boba Fett</li>

        <li :class="$style.infoItem">18 лет</li>

        <li :class="$style.infoItem">Developer</li>
      </ul>
    </div>
  </section>
</template>

<style module lang="scss">
  @import '@/components/UserInfo/UserInfo.scss';
</style>
