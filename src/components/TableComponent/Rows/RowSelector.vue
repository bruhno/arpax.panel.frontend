<script setup lang="ts">
import useIsExpired from '@/composables/useIsExpired';

import type { RowType } from '@/components/TableComponent/Rows/types';
import DefaultRow from '@/components/TableComponent/Rows/DefaultRow.vue';
import ExpiredRow from '@/components/TableComponent/Rows/ExpiredRow.vue';
import { toRef } from 'vue';

const props = defineProps<{
  row: RowType
}>();

const row = toRef(props, 'row');
const { item } = row.value;

const isExpired = useIsExpired(item.scheduleTime, item.estimateTime);
</script>

<template>
  <DefaultRow
    v-if="!isExpired"
    :row="row"
  />
  <ExpiredRow
    v-if="isExpired"
    :row="row"
  />
</template>
