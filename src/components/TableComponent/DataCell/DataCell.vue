<script setup lang="ts">
import { computed, useCssModule } from 'vue';
import { format } from 'date-fns';

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
  estimateTime: {
    type: String,
    default: '',
    required: false,
  },
  removed: Boolean,
});

const $style = useCssModule();

function isTime(time: string, estimateTime: string): boolean {
  const currentTime = new Date(estimateTime);
  const scheduleTime = new Date(time);
  return currentTime > scheduleTime;
}

const classObject = computed(() => ({
  [$style.yellow]: props.yellowColumns.includes(props.columnKey),
  [$style.red]: props.columnKey === props.timeColumnKey && isTime(props.value, props.estimateTime),
  [$style.lineThrough]: props.removed,
}));

const formattedValue = computed(() => {
  if (props.columnKey === props.timeColumnKey) {
    try {
      const date = new Date(props.value);
      return format(date, 'HH:mm');
    } catch {
      return props.value;
    }
  }
  return props.value;
});
</script>

<template>
  <p :class="classObject">
    {{ formattedValue }}
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
