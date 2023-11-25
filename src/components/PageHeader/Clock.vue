<template>
  <div :class="$style.clock">
    <v-icon
      :class="$style.clock__icon"
      icon="$clockOutline"
      size="24"
    />

    <span> {{ time }} / {{ date }} </span>
  </div>
</template>

<script lang="ts">
import format from 'date-fns/format';

export default {
  name: 'HeaderClock',
  data() {
    return {
      intervalId: 0,
      intervalDate: new Date(),
    };
  },
  computed: {
    time(): String {
      return format(this.intervalDate, 'kk:mm');
    },
    date() {
      return format(this.intervalDate, 'dd.MM.yyyy');
    },
  },
  created() {
    this.intervalId = setInterval(() => {
      this.intervalDate = new Date();
    }, 1000) as unknown as number;
  },
  unmounted() {
    clearInterval(this.intervalId);
  },
};
</script>

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
