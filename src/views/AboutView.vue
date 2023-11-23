<template>
  <div :class="$style.about">
    <h1>This is an about page</h1>
  </div>
</template>

<style module lang="scss">
@import "@/assets/styles/styleKit";

.about {
  @include text();
}
</style>
