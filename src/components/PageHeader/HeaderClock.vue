<script setup lang="ts">
import format from 'date-fns/format';
import {
  computed,
  onMounted,
  onUnmounted,
  ref,
} from 'vue';

const interval = ref<ReturnType<typeof setInterval>>();
const date = ref<Date>(new Date());

const dateString = computed(() => format(date.value, 'kk:mm / dd.MM.yyyy'));

onMounted(() => {
  interval.value = setInterval(() => {
    date.value = new Date();
  }, 1000);
});

onUnmounted(() => {
  clearInterval(interval.value);
});
</script>

<template>
  <div :class="$style.clock">
    <v-icon
      :class="$style.clock__icon"
      icon="$clockOutline"
      size="24"
    />

    <span> {{ dateString }} </span>
  </div>
</template>

<style module lang="scss">
@import '@/assets/styles/styleKit';
.clock {
  display: grid;
  grid-template-columns: min-content auto;
  grid-template-rows: min-content;
  grid-column-gap: 10px;
  grid-row-gap: 0;
  width: max-content;
  padding: 10px 20px;

  @include text($weight: 500, $size: 24px);

  &__icon {
    font-size: 2.5vw;
    align-self: center;
  }
}
</style>
