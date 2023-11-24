<script setup lang="ts">
import { defineComponent, ref } from 'vue';
import { TableComponent } from '@/components/TableComponent';

defineComponent({
  components: {
    TableComponent,
  },
  data() {
    return {
      tableData: [
        // ... данные из JSON
      ] as TableData[],
    };
  },
});

type TableData = {
  passenger: string
  baggageNum?: string
  flightNum: string
  destination: string
  scheduleTime: string
  estimateTime?: string
  inspection?: string
  removed?: boolean
};

const tableData = ref([
  {
    passenger: 'Кузнецов Иван',
    flightNum: 'DP-340',
    destination: 'Sochi',
    scheduleTime: '2024-11-16T05:40:00',
  },
  {
    passenger: 'Петров Тимофей2',
    flightNum: 'SU-6402',
    destination: 'St.Petersburg',
    scheduleTime: '2024-11-16T06:15:00',
    estimateTime: '2022-11-16T07:10:00',
  },
  {
    passenger: 'Петров Тимофей',
    baggageNum: '786768',
    flightNum: 'SU-6402',
    destination: 'St.Petersburg',
    scheduleTime: '2023-11-16T06:15:00',
    estimateTime: '2022-11-16T07:10:00',
    inspection: 'ФТС/САБ',
    removed: true,
  },
]);
const headers = [
  { title: 'Фамилия', key: 'passenger' },
  { title: '№ б/б', key: 'baggageNum' },
  { title: 'Рейс', key: 'flightNum' },
  { title: 'Пункт назначения', key: 'destination' },
  { title: 'Время по расписанию', key: 'scheduleTime' },
  { title: 'Время по факту', key: 'estimateTime' },
  { title: 'Досмотр', key: 'inspection' },
];
</script>

<template>
  <div class="greetings">
    Таблица - Доставить на повторный досмотр ФТС
    <table-component
      :items="tableData"
      :headers="headers"
      :yellow-columns="['flightNum', 'scheduleTime', 'inspection']"
      time-column-key="scheduleTime"
    />
  </div>
</template>

<style module lang="scss"></style>
