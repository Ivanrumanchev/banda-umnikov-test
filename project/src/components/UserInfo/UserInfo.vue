<template>
  <section :class="$style.userInfo">
    <Loader v-if="userLoading" />

    <div
      v-else
      :class="$style.wrapper"
    >
      <h2 class="visually-hidden">
        Информация о пользователе
      </h2>

      <div :class="$style.avatar">
        <img
          :class="$style.avatarImg"
          :src="userAvatar"
          alt="Аватар"
          width="140"
        >
      </div>

      <ul :class="$style.infoList">
        <li :class="$style.infoItem">
          <span :class="$style.category">
            Name:
          </span>

          {{ ` ${ userFullName }` }}
        </li>

        <li :class="$style.infoItem">
          <span :class="$style.category">
            Age:
          </span>

          {{ ` ${ userAge } ` }}

          years
        </li>

        <li :class="$style.infoItem">
          <span :class="$style.category">
            Job:
          </span>

          {{ ` ${ userJob }` }}
        </li>
      </ul>
    </div>

    <p
      v-if="userError"
      :class="$style.errorMessage"
    >
      {{ userError }}
    </p>

    <p
      v-if="userAvatarError"
      :class="$style.infoMessage"
    >
      * к сожалению, аватар не загрузился, использована резервная картинка
    </p>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import Loader from '@/components/Loader/Loader.vue';

export default {
  name: 'user-info',
  computed: mapGetters([
    'userFullName',
    'userAge',
    'userJob',
    'userAvatar',
    'userLoading',
    'userError',
    'userAvatarError',
  ]),
  components: {
    Loader,
  },
};
</script>

<style module lang="scss" src="@/components/UserInfo/UserInfo.scss">
</style>
