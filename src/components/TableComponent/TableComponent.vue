<script setup lang="ts">
import type { RowType } from '@/components/TableComponent/Rows/types';
import RowSelector from '@/components/TableComponent/Rows/RowSelector.vue';

type TableItem = Record<string, any>;

defineProps({
  items: {
    type: Array as () => Array<TableItem>,
    required: true,
  },
  headers: {
    type: Array as () => Array<{ title: string; key: string }>,
    required: true,
  },
  headerBackgroundColor: {
    type: String as () => 'redHeader' | 'yellowHeader',
    default: '',
  },
});
</script>

<template>
  <v-data-table
    :headers="headers"
    :items="items"
    item-value="passenger"
    :class="$style[headerBackgroundColor]"
  >
    <template #item="row: unknown">
      <RowSelector :row="row as RowType" />
    </template>

    <template #bottom />
  </v-data-table>
</template>

<style module lang="scss">
@import '@/assets/styles/styleKit';
div.yellowHeader {
  > div > table > thead > tr {
    background-color: $accent-text-color !important;
    color: black;
  }
}
.redHeader {
  table thead > tr {
    background-color: $danger-text-color !important;
  }
}
</style>
