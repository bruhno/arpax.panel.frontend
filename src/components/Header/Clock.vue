<template>
  <div :class="$style.clock">
    <i
      class="material-icons"
      :class="$style.clock__icon"
    > schedule </i>
    <span :class="$style.clock__time"> {{ time }} / {{ date }} </span>
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
    }, 1000);
  },
  unmounted() {
    clearInterval(this.intervalId);
  },
};
</script>

<style module lang="scss">
.clock {
  display: grid;
  grid-template-columns: min-content auto;
  grid-template-rows: min-content;
  grid-column-gap: 10px;
  grid-row-gap: 0px;
  width: max-content;
  padding: 10px 20px;
  font-size: 2.5vw;
  font-weight: 500;
  &__icon {
    font-size: 2.5vw;
    align-self: center;
  }
}
</style>
