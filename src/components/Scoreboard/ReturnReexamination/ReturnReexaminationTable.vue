<script setup lang="ts">
import {
  onMounted,
  onUnmounted,
  ref,
} from 'vue';
import { useRoute } from 'vue-router';
import TableComponent from '@/components/TableComponent/TableComponent.vue';
import { BaggageCell } from '@/components/TableComponent/Cells/BagageCell';

import { getReturnReexamination } from '@/api';
import type { ReturnReexaminationItem } from '@/domain/types';
import appConfig from '@/configs/appConfig';

const route = useRoute();
const { belt } = route.query;

const tableData = ref<ReturnReexaminationItem[]>([]);

const fetchData = async () => {
  try {
    const response = await getReturnReexamination({
      query: {
        belt: +(belt ?? 1),
      },
    });
    if (response !== undefined) {
      tableData.value = response;
    } else {
      tableData.value = [];
    }
  } catch {
    tableData.value = [];
  }
};

let intervalId: ReturnType<typeof setInterval>;

onMounted(() => {
  fetchData();
  intervalId = setInterval(fetchData, appConfig.requestInterval);
});

onUnmounted(() => {
  clearInterval(intervalId);
});

const headers = [
  { title: 'Фамилия', key: 'passenger' },
  { title: '№ б/б', key: 'baggageNum' },
  { title: 'Рейс', key: 'flightNum' },
  { title: 'Вылет', key: 'scheduleTime' },
  { title: 'Досмотр', key: 'inspection' },
];
</script>

<template>
  <table-component
    time-column-key="scheduleTime"
    header-background-color="redHeader"
    :yellow-columns="['flightNum', 'scheduleTime', 'inspection']"
    :headers="headers"
    :items="tableData"
  >
    <template #[`baggageNum`]="scope">
      <BaggageCell :value="scope.value" />
    </template>
  </table-component>
</template>

<style module lang="scss"></style>
