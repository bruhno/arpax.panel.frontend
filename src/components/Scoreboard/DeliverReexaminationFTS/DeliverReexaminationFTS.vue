<script setup lang="ts">
import {
  onMounted,
  onUnmounted,
  ref,
} from 'vue';
import { TableComponent } from '@/components/TableComponent';
import { BaggageCell } from '@/components/TableComponent/BagageCell';
import { PageHeader } from '@/components/PageHeader';

import { getDeliverReexaminationFTS } from '@/api';
import type { DeliverReexaminationFTSItem } from '@/domain/types';

const tableData = ref<DeliverReexaminationFTSItem[]>([]);
const fetchData = async () => {
  try {
    const response = await getDeliverReexaminationFTS({});
    if (response !== undefined) {
      tableData.value = response;
    } else {
      tableData.value = [];
    }
  } catch {
    tableData.value = [];
  }
};

let intervalId: number;

onMounted(() => {
  fetchData();
  intervalId = setInterval(fetchData, 1000) as unknown as number;
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
  <div class="greetings">
    <PageHeader
      title="Доставить на повторный досмотр ФТС"
      with-clock
    />
    <table-component
      :items="tableData"
      :headers="headers"
      :yellow-columns="['flightNum', 'scheduleTime', 'inspection']"
      time-column-key="scheduleTime"
    >
      <template #[`baggageNum`]="scope">
        <BaggageCell :value="scope.value" />
      </template>
    </table-component>
  </div>
</template>

<style module lang="scss"></style>
