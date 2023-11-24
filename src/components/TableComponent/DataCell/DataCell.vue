<script setup lang="ts">
import { computed, useCssModule } from 'vue';

const props = defineProps({
  columnKey: {
    type: String,
    default: '',
    required: false,
  },
  value: {
    type: String,
    default: '',
    required: false,
  },
  yellowColumns: {
    type: Array as () => Array<string>,
    default: () => [],
  },
  timeColumnKey: {
    type: String,
    required: true,
  },
  removed: Boolean,
});

const $style = useCssModule();

function isTimeOverdue(time: string) {
  const currentTime = new Date();
  const scheduleTime = new Date(time);
  return currentTime > scheduleTime;
}

const classObject = computed(() => ({
  [$style.yellow]: props.yellowColumns.includes(props.columnKey),
  [$style.red]: props.columnKey === props.timeColumnKey && isTimeOverdue(props.value),
  [$style.lineThrough]: props.removed,
}));
</script>

<template>
  <p :class="classObject">
    {{ props.value }}
  </p>
</template>

<style module lang="scss">
@import '@/assets/styles/styleKit';

.yellow {
  color: $accent-text-color;
}

.red {
  color: $danger-text-color;
}

.lineThrough {
  text-decoration: line-through;
}
</style>
