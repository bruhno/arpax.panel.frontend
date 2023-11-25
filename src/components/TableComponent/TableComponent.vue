<script setup lang="ts">
import { computed } from 'vue';
import { DataCell } from './DataCell';

type TableItem = Record<string, any>;

const props = defineProps({
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
  yellowColumns: {
    type: Array as () => Array<string>,
    default: () => [],
  },
  timeColumnKey: {
    type: String,
    required: true,
  },
});

function makeHeaderReadable(key: string): string {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase())
    .replace(/Num/g, ' Номер')
    .replace(/Time/g, ' Время');
}

const computedHeaders = computed(() => props.headers.map((header) => ({
  text: makeHeaderReadable(header.title),
  value: header.key,
})));
</script>

<template>
  <v-data-table
    :headers="headers"
    :items="items"
    item-value="passenger"
    :class="$style[headerBackgroundColor]"
  >
    <template
      v-for="(header, index) in computedHeaders"
      :key="`header-${header.value}-${index}`"
      #[`item.${header.value}`]="{ item }"
    >
      <data-cell
        :column-key="header.value"
        :value="item[header.value]"
        :removed="item.removed"
        :yellow-columns="yellowColumns"
        :time-column-key="timeColumnKey"
        :estimate-time="item.estimateTime"
      />
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
