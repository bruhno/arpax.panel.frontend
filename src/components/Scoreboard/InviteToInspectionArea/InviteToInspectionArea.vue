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
import appConfig from '@/configs/appConfig';

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

let intervalId: ReturnType<typeof setInterval>;

onMounted(() => {
  fetchData();
  intervalId = setInterval(fetchData, appConfig.requestInterval);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
const headers = [
  {
    title: 'Фамилия',
    key: 'passenger',
  },
  {
    title: 'Рейс',
    key: 'flightNum',
    color: 'yellow',
  },
  {
    title: 'Вылет',
    key: 'scheduleTime',
    color: 'yellow',
    type: 'time',
  },
  {
    title: 'Статус',
    key: 'status',
  },
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
    />
  </div>
</template>

<style module lang="scss"></style>
