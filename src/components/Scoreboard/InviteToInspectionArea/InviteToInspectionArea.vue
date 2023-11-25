<script setup lang="ts">
import { PageHeader } from '@/components/PageHeader';
import { TableComponent } from '@/components/TableComponent';
import {
  onMounted,
  onUnmounted,
  ref,
} from 'vue';
import type { InviteToInspectionAreaItem } from '@/domain/types';
import { getInviteToInspectionArea } from '@/api';

const tableData = ref<InviteToInspectionAreaItem[]>([]);
const fetchData = async () => {
  try {
    const response = await getInviteToInspectionArea({});
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
  { title: 'Рейс', key: 'flightNum' },
  { title: 'Вылет', key: 'scheduleTime' },
];
</script>

<template>
  <div class="greetings">
    <PageHeader
      title="Приглашаем пройти в зону досмотра пассажиров"
      with-clock
    />
    <table-component
      :items="tableData"
      :headers="headers"
      :yellow-columns="['flightNum', 'scheduleTime', 'inspection']"
      time-column-key="scheduleTime"
    />
  </div>
</template>

<style module lang="scss"></style>
