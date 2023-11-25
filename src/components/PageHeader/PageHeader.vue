<template>
  <div
    :class="[
      $style.header,
      { [$style.red]: bgColor === 'red' },
      { [$style.orange]: bgColor === 'orange' },
    ]"
  >
    <span :class="$style.header__title">{{ title }}</span>
    <Clock v-if="withClock" />
  </div>
</template>

<script lang="ts">
import Clock from '@/components/PageHeader/Clock.vue';

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
    withClock: {
      type: Boolean,
      default: false,
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
  grid-column-gap: 0;
  grid-row-gap: 0;
  padding: 20px 40px;
  background-color: $background-base;

  &__title {
    @include text($size: 24px, $weight: 800);
    align-self: center;
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
