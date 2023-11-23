<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <div :class="$style.wrapper">
    <RouterView />
  </div>
</template>

<style lang="scss" module>
@import 'assets/styles/styleKit';

.wrapper {
  @include text();
}
</style>
