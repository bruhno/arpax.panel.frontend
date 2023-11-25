<script setup lang="ts">
import ReturnReexaminationTable from '@/components/Scoreboard/ReturnReexamination/ReturnReexaminationTable.vue';
import { PageHeader } from '@/components/PageHeader';
</script>

<template>
  <div class="greetings">
    <PageHeader
      title="Вернуть с повторного досмотра"
      bg-color="red"
      with-clock
    />
    <ReturnReexaminationTable />
  </div>
</template>

<style module lang="scss"></style>
