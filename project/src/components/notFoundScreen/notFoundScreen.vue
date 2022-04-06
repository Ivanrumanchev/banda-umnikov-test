<template>
  <div>
    <h1 :class="$style.title">
      404.
      <br />
      <small>Page not found</small>
    </h1>
    <hr />
    <div class="wrapper">
      <router-link :class="$style.arrowCircle" :to="mainLinkUrl">Go to main page
        <svg
          :class="$style.arrowCircleIcon"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <g
            fill="none"
            stroke="#337AB7"
            strokeWidth="1.5"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          >
            <circle :class="$style.arrowCircleIconcircle" cx="16" cy="16" r="15.12"></circle>
            <path
              :class="$style.arrowCircleIconArrow"
              d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98">
            </path>
          </g>
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script>
import { AppRoute } from '@/const';

export default {
  name: 'not-found-screen',
  data: () => ({
    mainLinkUrl: AppRoute.Root,
  }),
};
</script>

<style module lang="scss">
  @import '@/components/notFoundScreen/notFoundScreen.scss';
</style>
