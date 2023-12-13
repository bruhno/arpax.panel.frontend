<script setup lang="ts">
import { computed, toRefs } from 'vue';
import DefaultCell from '@/components/TableComponent/Cells/DefaultCell/DefaultCell.vue';

import type { ColumnColors } from '@/components/TableComponent/Rows/types';
import useIsExpired from '@/composables/useIsExpired';
import { format, parseISO } from 'date-fns';

const props = defineProps<{
  value: string
  color?: ColumnColors
  expiredDate: string
}>();

const { value, expiredDate, color } = toRefs(props);

const isExpired = useIsExpired(value.value, expiredDate.value);

const currentColor = computed(() => (isExpired.value ? 'red' : color?.value));

const time = computed(() => format(parseISO(props.value), 'HH:mm'));
</script>

<template>
  <DefaultCell
    :color="currentColor"
    :value="time"
  />
</template>
