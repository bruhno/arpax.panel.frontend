<script setup lang="ts">
import { computed } from 'vue';
import type { ColumnColors } from '@/components/TableComponent/Rows/types';
import DefaultCell from '@/components/TableComponent/Cells/DefaultCell/DefaultCell.vue';

const props = defineProps<{
  value: String
  color?: ColumnColors
}>();

const segments = computed(() => props.value.replace(/(\d+)(\d{4})$/, '$1|$2').split('|', 2));
</script>

<template>
  <DefaultCell
    :class="$style.baggageCell"
    :color="color"
  >
    <span>
      {{ segments[0] }}
    </span>
    <span :class="$style.baggageCellMarked">
      {{ segments[1] }}
    </span>
  </DefaultCell>
</template>

<style module lang="scss">
@import '@/assets/styles/styleKit';

.baggageCell {
  font-size: 14px !important;

  &Marked {
    @include text($size: 18px);
  }
}
</style>
