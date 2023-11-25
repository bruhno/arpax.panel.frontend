<script setup lang="ts">
import DeliverReexaminationFTSTable from '@/components/Scoreboard/DeliverReexaminationFTS/DeliverReexaminationFTSTable.vue';
import { PageHeader } from '@/components/PageHeader';
</script>

<template>
  <div class="greetings">
    <PageHeader
      title="Доставить на повторный досмотр ФТС"
      with-clock
    />
    <DeliverReexaminationFTSTable />
  </div>
</template>

<style module lang="scss"></style>
