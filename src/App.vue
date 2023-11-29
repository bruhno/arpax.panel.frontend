<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router';
import { watch } from 'vue';

const route = useRoute();

watch(route, ({ meta }) => {
  document.title = meta.title as string;
});
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
