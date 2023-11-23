<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import logoSrc from '@/assets/images/logo.svg';
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      :src="logoSrc"
      width="125"
      height="125"
    />

    <div :class="$style.wrapper">
      <nav>
        <RouterLink to="/">
          Home
        </RouterLink>
        <RouterLink to="/about">
          About
        </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss" module>
@import "assets/styles/styleKit";

.wrapper {
  @include text()
}
</style>
