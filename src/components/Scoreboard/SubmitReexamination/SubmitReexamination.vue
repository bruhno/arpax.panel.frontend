<script setup lang="ts">
import SubmitReexaminationTable from '@/components/Scoreboard/SubmitReexamination/SubmitReexaminationTable.vue';
import { PageHeader } from '@/components/PageHeader';
</script>

<template>
  <div class="greetings">
    <PageHeader
      title="Доставить на повторный досмотр"
      bg-color="orange"
      with-clock
    />
    <SubmitReexaminationTable />
  </div>
</template>

<style module lang="scss"></style>
