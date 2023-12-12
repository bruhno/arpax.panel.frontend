<script setup lang="ts">
import DefaultRow from '@/components/TableComponent/Rows/DefaultRow.vue';
import { useCssModule } from 'vue';
import type { RowType } from './types';

const $style = useCssModule();

defineProps<{
  row: RowType
}>();
</script>

<template>
  <DefaultRow
    :class-name="$style.expired"
    :row="row"
  />
</template>

<style module lang="scss">
.expired {
  background-image: repeating-linear-gradient(
    130deg,
    rgba(255, 255, 255, 0.3) 9% 10%,
    rgba(255, 255, 255, 0) 10% 12%,
    rgba(255, 255, 255, 0) 5%
  );
}
</style>
