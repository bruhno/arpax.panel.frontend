<script setup lang="ts">
import {
  ref,
  toRefs,
  useCssModule,
} from 'vue';
import type { ColumnColors } from '@/components/TableComponent/Rows/types';

const $style = useCssModule();

const props = defineProps<{
  value?: string
  color?: ColumnColors
}>();

const { color } = toRefs(props);

const className = ref([$style.Cell, $style[color?.value ?? 'default']]);
</script>

<template>
  <td :class="className">
    <slot />
    {{ value }}
  </td>
</template>

<style module lang="scss">
@import '@/assets/styles/styleKit';

.Cell {
  &.default {
    color: $primary-text-color;
  }
  &.red {
    color: $danger-text-color;
  }
  &.yellow {
    color: $accent-text-color;
  }
}
</style>
