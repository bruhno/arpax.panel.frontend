<template>
  <div
    :class="[
      $style.header,
      { [$style.red]: bgColor === 'red' },
      { [$style.orange]: bgColor === 'orange' },
    ]"
  >
    <span :class="$style.header__title">{{ title }}</span>
    <Clock />
  </div>
</template>

<script lang="ts">
import Clock from '@/components/Header/Clock.vue';

export default {
  name: 'PageHeader',
  components: {
    Clock,
  },
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    bgColor: {
      type: String,
      default: 'default',
    },
  },
};
</script>

<style module lang="scss">
@import '@/assets/styles/styleKit.scss';
.header {
  display: grid;
  grid-template-columns: 2fr auto;
  grid-template-rows: repeat(1, min-content);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  padding: 20px 40px;
  font-family: 'Inter';
  background-color: $background-base;
  color: $primary-text-color;
  &__title {
    align-self: center;
    font-size: 2.5vw;
    font-weight: 800;
  }
}
.red {
  background-color: $background-header-red;
  color: $primary-text-color;
}
.orange {
  background-color: $background-header-orange;
  color: $background-base;
}
</style>
