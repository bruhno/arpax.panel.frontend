<script setup lang="ts">
import DefaultCell from '@/components/TableComponent/Cells/DefaultCell/DefaultCell.vue';
import TimeCell from '@/components/TableComponent/Cells/TimeCell/TimeCell.vue';
import BaggageCell from '@/components/TableComponent/Cells/BagageCell/BaggageCell.vue';
import type { RowType } from './types';

defineProps<{
  row: RowType
  className?: string
}>();
</script>

<template>
  <tr :class="className">
    <template
      v-for="column in row.columns"
      :key="column.key"
    >
      <DefaultCell
        v-if="!column.type"
        :value="row.item[column.key]"
        :color="column.color"
      />

      <TimeCell
        v-if="column.type === 'time'"
        :color="column.color"
        :expired-date="row.item.estimateTime"
        :value="row.item[column.key]"
      />

      <BaggageCell
        v-if="column.type === 'baggage'"
        :color="column.color"
        :value="row.item[column.key]"
      />
    </template>
  </tr>
</template>

<style module lang="scss"></style>
