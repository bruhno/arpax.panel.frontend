<script setup lang="ts">
import { useRoute } from 'vue-router';
import TableComponent from '@/components/TableComponent/TableComponent.vue';
import {
  onMounted,
  onUnmounted,
  ref,
} from 'vue';

import { getSubmitReexamination } from '@/api';
import type { SubmitReexaminationItem } from '@/domain/types';
import appConfig from '@/configs/appConfig';

const route = useRoute();
const { belt } = route.query;

const tableData = ref<SubmitReexaminationItem[]>([]);

const fetchData = async () => {
  try {
    const response = await getSubmitReexamination({
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
  {
    title: 'Фамилия',
    key: 'passenger',
  },
  {
    title: '№ б/б',
    key: 'baggageNum',
    type: 'baggage',
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
    title: 'Досмотр',
    key: 'inspection',
    color: 'yellow',
  },
];
</script>

<template>
  <table-component
    :headers="headers"
    :items="tableData"
    header-background-color="yellowHeader"
  />
</template>

<style module lang="scss"></style>
